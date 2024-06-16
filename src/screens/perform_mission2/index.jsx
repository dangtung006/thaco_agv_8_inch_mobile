import Images from '@src/assets/gen';
import { BaseScreen } from '@src/components';
import { ViewLeft } from './step1/ViewLeft';
import { ViewRight } from './step1/ViewRight';
import { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';

export default function PerformMissionScreen2(props) {
  const [step, setStep] = useState(1);
  return (
    <BaseScreen>
      {step === 1 ? <Step1 nextStep={() => setStep(2)} /> : <Step2 />}
    </BaseScreen>
  );
}
