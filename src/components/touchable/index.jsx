import { useCommonState } from '@src/store/commonStorage';
import tw from '@src/utils/tailwindLoader';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function BaseTouchable({
    classname = '',
    children,
    onPress,
    activeOpacity,
    withoutFeedback,
}) {
    const { setSleep } = useCommonState((state) => state);
    return (
        <>
            {withoutFeedback ? (
                <TouchableWithoutFeedback
                    onPressIn={() => {
                        console.log('onPressIn');
                        setSleep(undefined);
                        setTimeout(() => {
                            setSleep(false);
                        }, 50);
                    }}
                    onPress={onPress}
                    style={tw`${classname}`}
                >
                    {children}
                </TouchableWithoutFeedback>
            ) : (
                <TouchableOpacity
                    activeOpacity={activeOpacity}
                    onPress={onPress}
                    style={tw`${classname}`}
                >
                    {children}
                </TouchableOpacity>
            )}
        </>
    );
}
