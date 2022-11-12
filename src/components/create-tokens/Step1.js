import Button from '@mui/material/Button'
import './CreateTokens.css'

export default function Step1({
  setActiveStep,
  tokenname,
  settokenname,
  purchaseamount,
  setpurchaseamount,
  asset1,
  asset2,
  asset3,
}) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className="stepmain">
      <div className="stepheader">
        <p className="step-title">Name Your Fund</p>
        <p className="step-subtitle" style={{ marginTop: '-1rem' }}>
          Name of fund must be 3 letters
        </p>
      </div>

      <br />
      <input
        className="step-input"
        placeholder="Enter name..."
        value={tokenname}
        onChange={(e) => settokenname(e.target.value)}
      />
      <br />
      <br />

      <div className="stepheader">
        <p className="step-title">Define Purchase Amount</p>
        <p className="step-subtitle" style={{ marginTop: '-1rem' }}>
          This will be the amount of USDT allocated to purchase your assets
        </p>
      </div>

      <br />
      <input
        className="step-input"
        placeholder="Enter amount in USDT"
        value={purchaseamount}
        onChange={(e) => setpurchaseamount(e.target.value)}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button variant="contained" className="step-btn" style={{ marginLeft: '2rem' }} size="large" onClick={handleNext}>
        Continue
      </Button>
    </div>
  )
}
