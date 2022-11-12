import { useCallback, useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import { SERVER_URL } from '../../constants'
import './IndexDetails.css'

import LineGraph from './LineGraph'
import PieGraph from './PieGraph'
import FormDialog from './FormDialog'

export default function IndexDetails({ setActiveStep }) {
  const { fundid } = useParams()

  const [openPurchaseModal, setopenPurchaseModal] = useState(false)
  const [indexfund, setindexfund] = useState({})
  const [assets, setassets] = useState([])
  const [price, setPrice] = useState(null)

  useEffect(() => {
    getFundbyId()
  }, [fundid])

  useEffect(() => {
    gettokens()
  }, [fundid])

  const getFundbyId = async () => {
    const response = await fetch(SERVER_URL + 'fund/getfundbyid/' + fundid)
    const data = await response.json()
    console.log('data details', data)
    setindexfund(data[0])
  }

  const gettokens = async () => {
    const response = await fetch(SERVER_URL + 'fund/getalltokensbyfund/' + fundid)
    const data = await response.json()
    const tokenPrice = data[0].price + data[1].price + data[2].price
    setPrice(tokenPrice)
    setassets(data)
  }

  const handlePurchaseModaOpen = () => {
    setopenPurchaseModal(true)
  }

  const handlePurchaseModaClose = () => {
    setopenPurchaseModal(false)
  }

  return (
    <div className="maincontainer">
      <div className="headerflex">
        <h1>{indexfund.tokenname}</h1>
        <p>{indexfund.createdate}</p>
      </div>
      <p>{indexfund.useraddress}</p>

      <div className="indexdetailsbox">
        <LineGraph />
      </div>

      <Button className="tradebtn" variant="contained" color="primary" size="large" onClick={handlePurchaseModaOpen}>
        Trade Now
      </Button>

      <br />
      <br />
      <br />

      <div className="indexdetailsbox">
        <h2>What’s in this fund</h2>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PieGraph assets={assets} />
          </Grid>
          <Grid item xs={4}>
            <div className="centerflex">
              <Avatar sx={{ bgcolor: 'rgba(255, 99, 132, 0.2)' }}>1</Avatar>
              <div>
                <p>{assets[0]?.tokenname}</p>
                <p>{(assets[0]?.total / (assets[0]?.total + assets[1]?.total + assets[2]?.total)) * 100}%</p>
              </div>
            </div>
            <div className="centerflex">
              <Avatar sx={{ bgcolor: 'rgba(255, 206, 86, 0.2)' }}>2</Avatar>
              <div>
                <p>{assets[2]?.tokenname}</p>
                <p>{(assets[2]?.total / (assets[0]?.total + assets[1]?.total + assets[2]?.total)) * 100}%</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="centerflex">
              <Avatar sx={{ bgcolor: 'rgba(54, 162, 235, 0.2)' }}>3</Avatar>
              <div>
                <p>{assets[1]?.tokenname}</p>
                <p>{(assets[1]?.total / (assets[0]?.total + assets[1]?.total + assets[2]?.total)) * 100}%</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <FormDialog
        indexfund={indexfund}
        openPurchaseModal={openPurchaseModal}
        handlePurchaseModaClose={handlePurchaseModaClose}
        price={price}
      />
    </div>
  )
}
