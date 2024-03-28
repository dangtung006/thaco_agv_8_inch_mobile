import { BaseScreen } from '@src/components';
import { TaskHistory } from './components/TaskHistory';
import { TaskManagement } from './components/TaskManagement';

export default function TaskManagerScreen(props) {
  return (
    <BaseScreen classname='p-10 pb-[62px]'>
      <TaskHistory />
      <TaskManagement />
    </BaseScreen>
  );
}
