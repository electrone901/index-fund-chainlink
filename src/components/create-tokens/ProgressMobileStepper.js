import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import './CreateTokens.css'

export default function ProgressMobileStepper({ activeStep }) {
  return (
    <MobileStepper
      className='stepper'
      variant="progress"
      steps={3}
      position="static"
      activeStep={activeStep}
      style={{ flexGrow: 1 }}
    />
  );
}
