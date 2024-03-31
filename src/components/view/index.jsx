import tw from "@src/utils/tailwindLoader";
import { View } from "react-native";

export default function BaseView({classname = '', children}){
    return (<View style={tw`${classname}`}>{children}</View>)
}