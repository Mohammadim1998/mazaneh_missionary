import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./styles.css"

const steps = [
    'مکان',
    'زمان',
    'مخاطب',
    'اطلاعات جلسه',
    'فعالیت مبلغ',
];


const ProgressBarMUI = ({ stepPage }) => {
    return (
        <div dir='rtl'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={stepPage} alternativeLabel
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    )
}

export default ProgressBarMUI;
