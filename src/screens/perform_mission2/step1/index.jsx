import { ViewLeft } from './ViewLeft';
import { ViewRight } from './ViewRight';

export default function Step1({ nextStep }) {
  return (
    <>
      <ViewLeft nextStep={nextStep} />
      <ViewRight />
    </>
  );
}
