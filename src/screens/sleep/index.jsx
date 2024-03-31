import Images from '@src/assets/gen';
import { BaseImage, BaseTouchable, BaseView } from '@src/components';

export default function SleepScreen() {
  return (
    <BaseTouchable classname='flex-1 bg-black w-full h-full'>
      <BaseImage source={Images.sleep} classname='w-full h-full' />
    </BaseTouchable>
  );
}
