import { useCallback, useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PieGraph from './PieGraph'
import './CreateTokens.css'
import blue from '../../images/blue.png'
import yellow from '../../images/yellow.png'
import green from '../../images/green.png'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'


const coins = [
  { label: 'Tether (USDT)', address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
  { label: 'USD Coin (USDC)', address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
  { label: 'Polygon (MATIC)', address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0" },
  { label: 'Dai (DAI)', address: "0x6b175474e89094c44da98b954eedeac495271d0f" },
  { label: 'Wrapped Bitcoin (WBTC)', address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
  { label: 'Chainlink (LINK)', address: "0x514910771af9ca656af840dff83e8264ecf986ca" },
];

export default function Step2({
  setActiveStep,
  tokenname,
  asset1,
  asset2,
  asset3,
  setasset1,
  setasset2,
  setasset3,
  percent1,
  percent2,
  percent3,
  setpercent2,
  setpercent3,
  setpercent1,
  createFund,
}) {
  const [name1, setname1] = useState('')
  const [name2, setname2] = useState('')
  const [name3, setname3] = useState('')

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div>
      <div className="stepheader">
        <p className="step-title">Select Assets</p>
        <p className="step-subtitle" style={{ marginTop: '-1rem' }}>
          These will be the underlying assets of your fund
        </p>
      </div>

      <Autocomplete
        style={{ background: 'rgba(255, 255, 255, 0.9)', width: '586px', marginTop: '1.6rem' }}
          
          id="combo-box-demo"
          options={coins}
          sx={{ width: 300 }}
          placeholder="Search to select..."
          onChange={(event, newValue) => {
            console.log(newValue)
            if(asset1 === ""){
              setname1(newValue.label)
              setasset1(newValue.address)
            }
            else if(asset2 === ""){
              setname2(newValue.label)
              setasset2(newValue.address)
            }
            else if(asset3 === ""){
              setname3(newValue.label)
              setasset3(newValue.address)
            }
          }}
          renderInput={(params) => {
            return (
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <SearchIcon sx={{ color: 'action.active', mx: 1, mb: 1.5, fontSize: 35 }} />
              <TextField {...params} label="Search to select..." />
            </Box>
            )
          }}
        />

      
      <div className="input-container">
        <br />
        <br />
        <br />
        <br />
        <input
          className="input-dashes"
          placeholder="Asset 1 of 3"
          value={name1}
          onChange={(e) => setname1(e.target.value)}
        />
        <input
          className="input-dashes"
          placeholder="Asset 2 of 3"
          value={name2}
          onChange={(e) => setname2(e.target.value)}
        />
        <input
          className="input-dashes"
          placeholder="Asset 3 of 3"
          value={name3}
          onChange={(e) => setname3(e.target.value)}
        />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="stepheader">
        <p className="step-title">Select Percentages</p>
        <p className="step-subtitle">This will define the distribution of your fund </p>
      </div>

      <br />
      <br />

      <div className="indexdetailsbox">
        <p>{tokenname}</p>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PieGraph assets={[percent1, percent2, percent3]} />
          </Grid>
          <Grid item xs={4}>
            <div className="">
              <div className="centerflex">
                <img src={blue} alt="blue" style={{ marginRight: '10px' }} />
                <p> Asset number 1</p>
              </div>

              <div>
                <input
                  className="percentage-input"
                  placeholder="percent1"
                  value={percent1}
                  onChange={(e) => setpercent1(e.target.value)}
                />
              </div>
            </div>

            <br />
            <br />

            <div className="">
              <div className="centerflex">
                <img src={green} alt="blue" style={{ marginRight: '10px' }} />
                <p> Asset number 2</p>
              </div>
              <div>
                <input
                  className="percentage-input"
                  placeholder="percent3"
                  value={percent3}
                  onChange={(e) => setpercent3(e.target.value)}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="">
              <div className="centerflex">
                <img src={yellow} alt="blue" style={{ marginRight: '10px' }} />
                <p> Asset number 2</p>
              </div>

              <div>
                <input
                  className="percentage-input"
                  style={{ marginLeft: '2rem' }}
                  placeholder="percent2"
                  value={percent2}
                  onChange={(e) => setpercent2(e.target.value)}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />

      <center>
        {/* <Button variant="contained" style={{ backgroundColor: '#2e5422' }} size="large" onClick={handleBack}>
          Back
        </Button> */}
        <Button variant="contained" className="step-btn" size="large" onClick={createFund}>
          Create Fund
        </Button>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
