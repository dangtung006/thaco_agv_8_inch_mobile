import { MISSION_STATUS } from '@src/utils/constants';
import { useState } from 'react';
import { View } from 'react-native';
import MissionPending from './MissionPending';
import MissionProcessing from './MissionProcessing';
import MissionCompleted from './MissionCompleted';

export default MissionComponent = () => {
  const [taskStatus, setTaskStatus] = useState(MISSION_STATUS.PENDING);

  const _buildMission = () => {
    let task;
    switch (taskStatus) {
      case MISSION_STATUS.PENDING:
        task = (
          <MissionPending
            onPress={() => {
              setTaskStatus(MISSION_STATUS.PROCESSING);
              setTimeout(() => {
                setTaskStatus(MISSION_STATUS.COMPLETED);
              }, 1000);
            }}
          />
        );
        break;
      case MISSION_STATUS.PROCESSING:
        task = <MissionProcessing />;
        break;
      case MISSION_STATUS.COMPLETED:
        task = <MissionCompleted />;
        break;
      default:
        task = <View></View>;
        break;
    }
    return task;
  };
  return <View className='w-1/2'>{_buildMission()}</View>;
};
