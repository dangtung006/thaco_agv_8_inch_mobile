import tw from "@src/utils/tailwindLoader";
import { ScrollView } from "react-native";

export default function BaseScrollView({classname='', children}){
    return (<ScrollView style={tw`${classname}`}>{children}</ScrollView>)
}