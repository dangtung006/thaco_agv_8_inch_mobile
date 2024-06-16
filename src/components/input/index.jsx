import { classnames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';
import { TextInput } from 'react-native';

export default BaseTextInput = ({
  defaultValue,
  value,
  placeholder,
  classname = '',
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      defaultValue={defaultValue}
      value={value}
      keyboardType={keyboardType}
      placeholder={placeholder}
      style={tw`${classnames(
        'min-w-[200px] rounded-lg px-5 h-10 border-greyText bg-greyBg',
        classname
      )}`}
    />
  );
};
