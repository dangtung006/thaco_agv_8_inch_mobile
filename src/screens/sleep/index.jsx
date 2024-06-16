import Images from '@src/assets/gen';
import { BaseImage, BaseModal, BaseTouchable, BaseView } from '@src/components';
import { useCommonState } from '@src/store/commonStorage';
import { TIME_TO_SLEEP } from '@src/utils/constants';
import { useEffect } from 'react';

export default function SleepScreen() {
  const {sleep, setSleep } = useCommonState((state) => state);
  let timer;
  
  useEffect(() => {
    if (typeof sleep === 'boolean' && !sleep) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSleep(true);
        console.log('sleep');
      }, TIME_TO_SLEEP);
      return () => clearTimeout(timer);
    }
  }, [sleep]);

  return (
    <BaseModal
      visible={sleep}
      backdropColor='black'
      backdropOpacity={1}
      onBackdropPress={() => {
        setSleep(false);
      }}
    >
      <BaseTouchable
        onPress={() => {
          setSleep(undefined);
          setTimeout(() => {
            setSleep(false);
          }, 50);
        }}
        classname='w-full h-full'
        isInsideModal
      >
        <BaseImage source={Images.sleep} classname='w-full h-full' />
      </BaseTouchable>
    </BaseModal>
  );
}
