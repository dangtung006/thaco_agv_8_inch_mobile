import Images from '@src/assets/gen';
import { BaseButton, BaseCard, BaseText } from '@src/components';
import { MISSION_STATUS } from '@src/utils/constants';
import { useEffect, useState } from 'react';
import { FlatList, Switch, TouchableOpacity, View } from 'react-native';
import MissionProcessing from './mission/MissionProcessing';
import MissionCompleted from './mission/MissionCompleted';
import MissionPending from './mission/MissionPending';
import MissionComponent from './mission/MissionComponent';

export const TaskManagement = () => {
  const [isEnabledLoop, setIsEnabledLoop] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasks([1]);
    }, 2000);
  }, []);

  const _buildAction = () => {
    return (
      <View className='mt-4 w-full flex flex-row justify-center'>
        <BaseButton
          small
          classname='mr-4 flex-1'
          background={tasks[0] ? 'blue500' : 'greyBt'}
          icon={Images.play}
          title='Chạy'
        />
        <BaseButton
          classname='mr-4 flex-1'
          small
          background={tasks[0] ? 'white' : 'greyBt'}
          iconColor={tasks[0] ? 'red' : 'white'}
          titleColor={tasks[0] ? 'red' : 'white'}
          icon={Images.cancel}
          title='Hủy'
        />
        <BaseButton
          classname='mr-4 flex-1'
          small
          background={tasks[0] ? 'red' : 'greyBt'}
          iconColor={tasks[0] ? 'white' : 'white'}
          titleColor={tasks[0] ? 'white' : 'white'}
          icon={Images.remove}
          title='Xóa'
        />
        <BaseButton
          small
          onPress={() => setIsEnabledLoop((previousState) => !previousState)}
          classname='pr-2 w-[210px]'
          background={tasks[0] ? 'white' : 'greyBt'}
          iconColor={tasks[0] ? 'black' : 'white'}
          titleColor={tasks[0] ? 'black' : 'white'}
          icon={Images.loop}
          title='Lặp lại'
          rightWidget={
            <Switch
              onValueChange={() =>
                setIsEnabledLoop((previousState) => !previousState)
              }
              thumbColor={isEnabledLoop ? '#377DE5' : '#f4f3f4'}
              value={isEnabledLoop}
              style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
          }
        />
      </View>
    );
  };
  const _buildListMission = () => {
    return (
      <View>
        <FlatList
          numColumns={2}
          data={[1, 2, 3]}
          renderItem={({ item, index }) => <MissionComponent key={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <View className='w-7/12 ml-4 h-full flex justify-center items-start'>
      <BaseCard title='Nhiệm vụ' children={_buildListMission()} />
      {_buildAction()}
    </View>
  );
};
