import tw from '@src/utils/tailwindLoader';
import Video from 'react-native-video';
import sleepVideo from "../../assets/images/happy.mp4";
import { useRef } from 'react';
export default function BaseVideo({
    // source,
    classname = '',
    style
}) {
    const videoPlayer = useRef()
    return (
        <Video
            resizeMode='contain'
            repeat={true}
            source={sleepVideo}
            paused={false} 
            ref={ref => (videoPlayer.current = ref)}
            style={[tw`${classname}`, style]}
        />
    );
}
