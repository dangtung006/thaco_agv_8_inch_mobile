import tw from "@src/utils/tailwindLoader";
import { View, StyleSheet, Text } from "react-native";

export default function BaseOverlay({ 
    classname = '', 
    children, 
    isVisible = true, 
    content ,
    overlayVisible
}) {

    return (
        <View style={styles.container}>
            <View>
                { children }
            </View>
            {
                overlayVisible && (

                    <View style={styles.overlay}>
                        {
                            content
                        }
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow : 'hidden',
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    },
    overlay: {
        overflow : 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor: '#ccc', // Transparent black overlay
        justifyContent: 'center',
        alignItems: 'center',
    }
});

  {/* <View style={[
                    {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow : 'hidden',
                        borderBottomLeftRadius : 10,
                        borderBottomRightRadius : 10,
                        position : 'relative'
                    }
                ]}>
                </View> */}