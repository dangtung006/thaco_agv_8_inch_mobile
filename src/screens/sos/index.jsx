import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseModal,
  BaseScreen,
  BaseScrollView,
  BaseText,
  BaseTouchable,
  BaseView,
} from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
import tw from '@src/utils/tailwindLoader';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SosModal } from './SosModal';
export default function SosScreen(props) {
  const Items = [
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
    {
      title:
        '"Sự cố kỹ thuật! Tình huống khẩn cấp! Yêu cầu trợ giúp ngay lập tức."',
    },
  ];
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  const _handleSos = () => {
    setOpen(true);
  };

  const _buildItem = (item, index) => {
    return (
      <BaseTouchable
        onPress={() => _handleSos()}
        key={index}
        classname={`bg-white border-[2px] border-blue500 rounded-lg w-[${
          (windowWidth - 66 * 2 - 40 * 2) / 3
        }px] h-[${
          (windowHeight - 50 - 66 * 2 - 40) / 2
        }px] flex flex-col items-center justify-center px-32px mr-10 mb-10`}
      >
        <BaseText classname='text-blue500 text-center' size={24}>
          {item.title}
        </BaseText>
      </BaseTouchable>
    );
  };
  return (
    <BaseScreen>
      <FlatList
        style={tw`flex-1 bg-bg p-[66px] flex flex-row flex-wrap`}
        numColumns={3}
        data={Items}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<BaseView classname='h-100px' />}
        renderItem={({ item, index }) => {
          return _buildItem(item, index);
        }}
      />
      <BaseModal
        onBackdropPress={() => {
          setOpen(false);
        }}
        visible={isOpen}
        backdropColor='black'
        classname='mx-100px'
      >
        <SosModal onClose={() => setOpen(false)} />
      </BaseModal>
    </BaseScreen>
  );
}
