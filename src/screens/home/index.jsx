import BaseText from '@src/components/text';
import { View } from 'react-native';
export default function HomeScreen() {
    return (
        <View >
            <BaseText locale bold size={30} classname={'underline underline-offset-4 text-blue'}>xin chào</BaseText>
        </View>
    );
}

