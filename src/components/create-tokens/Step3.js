import { useCallback, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import './CreateTokens.css'
import PieGraph from './PieGraph';

import Icon from '../../images/check.png';

export default function Step2({ setActiveStep, asset1, asset2, asset3, percent1, percent2, percent3, tokenname }) {
  const change = useNavigate();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <center>
        <img className='checkicon' src={Icon} alt="Check" />
        <p className='createtext'>Your fund has been created!</p>
      </center>
     
      <br />

      <div className='indexdetailsbox'>
        <p>{tokenname}</p>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PieGraph assets={[percent1, percent2, percent3]}/>
          </Grid>
          <Grid item xs={4}>
            <div className='centerflex'>
              <Avatar sx={{ bgcolor: 'rgba(255, 99, 132, 0.2)' }}>1</Avatar>
              <div>
                <p>{asset1}</p>
                <p>{percent1}%</p>
              </div>
            </div>
            <div className='centerflex'>
              <Avatar sx={{ bgcolor: 'rgba(255, 206, 86, 0.2)' }}>2</Avatar>
              <div>
                <p>{asset2}</p>
                <p>{percent2}%</p>
              </div>
            </div>
          </Grid>
        
          <Grid item xs={4}>
            <div className='centerflex'>
              <Avatar sx={{  bgcolor: 'rgba(54, 162, 235, 0.2)' }}>3</Avatar>
              <div>
                <p>{asset3}</p>
                <p>{percent3}%</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />

      <Button variant='contained' color="secondary" size="large" onClick={() => change('/explore-funds')}>
        Explore Funds
      </Button>
      <Button variant='contained' color="primary" size="large" onClick={() => change('/')}>
        Back to dashboard
      </Button>
    </div>
  )
}
