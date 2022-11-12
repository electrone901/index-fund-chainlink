import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Icon from '../../images/check.png'
import { buyIndex } from '../../MoralisHelper'
import './IndexDetails.css'

export default function FormDialog({ indexfund, openPurchaseModal, handlePurchaseModaClose, price }) {
  const [isPurchase, setisPurchase] = useState(false)
  const [numbTokens, setNumbTokens] = useState('')

  const buy = async () => {
    buyIndex()
    setTimeout(function () {
      setisPurchase(true)
    }, 2000)
  }

  return (
    <div>
      <Dialog open={openPurchaseModal} onClose={handlePurchaseModaClose}>
        <IconButton
          aria-label="close"
          onClick={handlePurchaseModaClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        {!isPurchase ? (
          <>
            <DialogTitle>
              <h1 className="mb0">Buy {indexfund.tokenname}</h1>
              <p className="mt0 mb0">XX USDT available</p>
            </DialogTitle>
          </>
        ) : (
          <center>
            <img className="checkicon" src={Icon} alt="Check" />
            <DialogTitle>{indexfund.tokenname} Purchased</DialogTitle>
          </center>
        )}

        <DialogContent style={{ width: ' 500px' }}>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Number of Tokens"
            fullWidth
            variant="standard"
            value={numbTokens}
            onChange={(e) => setNumbTokens(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            fullWidth
            variant="standard"
            value={numbTokens * price}
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Estimated Cost"
            fullWidth
            variant="standard"
            value={Math.round(numbTokens * price)}
            disabled
          />
        </DialogContent>
        <DialogActions className="pb3">
          {!isPurchase && (
            <Button variant="contained" color="primary" onClick={buy} fullWidth>
              Purchase
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  )
}
