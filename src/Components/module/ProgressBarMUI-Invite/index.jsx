import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./styles.css"
import { useState } from 'react';

const ProgressBarMUI_Invite = ({ stepPage, steps }) => {
    const [data, setData] = useState(steps || []);

    return (
        <div dir='rtl' className='w-full progressBarMUI_Invite'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={stepPage} alternativeLabel>
                    {data.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    )
}

export default ProgressBarMUI_Invite;
