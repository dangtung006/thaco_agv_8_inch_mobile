import { classNames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';
import { TextInput, View } from 'react-native';

export default BaseTextInput = ({
  defaultValue,
  value,
  placeholder,
  classname,
}) => {
  return (
    <View>
      <TextInput
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        className='border min-w-[200px] rounded-lg px-5 h-10 border-greyText bg-greyBg' 
        style={tw`${classNames(classname)}`}
      />
    </View>
  );
};
