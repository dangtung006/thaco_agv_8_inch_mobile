import Images from '@src/assets/gen';
import { BaseScreen } from '@src/components';
import { ViewLeft } from './ViewLeft';
import { ViewRight } from './ViewRight';
export default function ManualControlScreen(props) {
  return (
    <BaseScreen>
      <ViewLeft />
      <ViewRight />
    </BaseScreen>
  );
}
