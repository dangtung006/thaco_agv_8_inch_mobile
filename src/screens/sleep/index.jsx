import Images from '@src/assets/gen';
import { BaseImage, BaseTouchable, BaseView } from '@src/components';
import { useCommonState } from '@src/store/commonStorage';

export default function SleepScreen() {
  const { setSleep } = useCommonState((state) => state);

  return (
    <BaseTouchable
      onPress={() => {
        setSleep(undefined);
        setTimeout(() => {
          setSleep(false);
        }, 50);
      }}
      classname='w-full h-full'
    >
      <BaseImage source={Images.sleep} classname='w-full h-full' />
    </BaseTouchable>
  );
}
