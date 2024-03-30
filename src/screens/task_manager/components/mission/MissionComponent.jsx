import { MISSION_STATUS } from '@src/utils/constants';
import { useState } from 'react';
import MissionPending from './MissionPending';
import MissionProcessing from './MissionProcessing';
import MissionCompleted from './MissionCompleted';
import { BaseView } from '@src/components';

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
        task = <BaseView></BaseView>;
        break;
    }
    return task;
  };
  return <BaseView classname='w-1/2'>{_buildMission()}</BaseView>;
};
