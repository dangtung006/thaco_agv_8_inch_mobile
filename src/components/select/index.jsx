import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BaseText from '../text';
import Images from '@src/assets/gen';
import BaseTouchable from '../touchable';
import tw from '@src/utils/tailwindLoader';
import BaseImage from '../image';
import BaseModal from '../modal';

export default function BaseSelect(props) {
  const { data, onChange, value, classname = '' } = props;
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectItem] = useState();
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const dropdownButtonRef = useRef();

  useEffect(() => {
    setSelectItem(value);
  }, [value]);

  useEffect(() => {
    dropdownButtonRef?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      if (py && h) {
        setDropdownTop(py + h);
      }
      if (_px) setDropdownLeft(_px);
    });
  }, [isOpen]);

  const buildDropDown = () => {
    return (
      <BaseModal
        onBackdropPress={() => {
          setOpen(false);
        }}
        visible={isOpen}
        backdropColor='black'
        backdropOpacity={0.3}
      >
        <View
          style={[
            styles.dropdownSelect,
            {
              zIndex: 100,
              top: dropdownTop + 4,
              left: dropdownLeft,
              width: dropdownWidth,
            },
          ]}
        >
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <BaseTouchable
                  onPress={() => {
                    onChange && onChange(item);
                    setSelectItem(item);
                    setOpen(false);
                  }}
                  classname='py-2 px-3'
                  isInsideModal
                >
                  <BaseText size={20} medium>
                    {item.title}
                  </BaseText>
                </BaseTouchable>
              );
            }}
          />
        </View>
      </BaseModal>
    );
  };

  return (
    <View
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        if (dropdownWidth !== layout.width) {
          setDropdownWidth(layout.width);
        }
      }}
      style={[{ zIndex: 1000 }, tw`${classname}`]}
    >
      <Pressable
        ref={dropdownButtonRef}
        onPress={() => {
          setOpen(!isOpen);
        }}
        style={tw`border border-[#7784EE] flex flex-row h-70px justify-between items-center rounded-lg px-3 bg-white shadow-lg`}
      >
        <BaseText size={24} semiBold medium>
          {selectedItem?.title}
        </BaseText>
        <BaseImage classname='w-40px h-28px' source={Images.arrowDownSelect} />
      </Pressable>
      {buildDropDown()}
    </View>
  );
}
const styles = StyleSheet.create({
  dropdownSelect: {
    position: 'absolute',
    right: 0,
    maxHeight: 250,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 12,
  },

  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
