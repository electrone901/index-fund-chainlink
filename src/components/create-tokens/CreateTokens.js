import { useCallback, useRef, useState, useEffect } from 'react'
import { useActiveProvider } from '../../connectors'
import { SERVER_URL } from '../../constants'
import { createIndex } from '../../MoralisHelper'

import ProgressMobileStepper from './ProgressMobileStepper'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import './CreateTokens.css'

export default function CreateTokens() {
  const provider = useActiveProvider()

  const [activeStep, setActiveStep] = useState(0)
  const [contractaddress, setcontractaddress] = useState('')
  const [amount, setamount] = useState('')

  const [tokenname, settokenname] = useState('')
  const [purchaseamount, setpurchaseamount] = useState(null)

  const [asset1, setasset1] = useState('')
  const [asset2, setasset2] = useState('')
  const [asset3, setasset3] = useState('')

  const [percent1, setpercent1] = useState(33)
  const [percent2, setpercent2] = useState(33)
  const [percent3, setpercent3] = useState(33)

  const createFund = async () => {
    createIndex()
    const signer = provider.getSigner()
    const address = await signer.getAddress()

    await fetch(SERVER_URL + 'fund/createfund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        useraddress: address,
        tokenname: tokenname,
        contractaddress: '',
      }),
    })

    const fund = await fetch(SERVER_URL + 'fund/getfundrecent/' + address)
    const funddata = await fund.json()
    const fundid = funddata[0].id
    console.log(funddata)

    await createToken(fundid, asset1, percent1)
    await createToken(fundid, asset2, percent2)
    await createToken(fundid, asset3, percent3)

    await fetch(SERVER_URL + 'transaction/addtransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        useraddress: address,
        nameoffund: tokenname,
        typeoftransaction: 'Create',
        amount: purchaseamount,
        price: purchaseamount,
      }),
    })

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const createToken = async (id, ca, p) => {
    const res = await fetch(SERVER_URL + 'fund/getprice/' + ca)
    const price = await res.json()

    const total = (+purchaseamount / +price.data[0].prices[0].price) * (+p / 100)
    console.log(price.data[0].prices[0].price, total, p)

    const response = await fetch(SERVER_URL + 'fund/addtokentofund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fundid: id,
        contractaddress: ca,
        amount: total,
      }),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="maincontainer">
      <ProgressMobileStepper activeStep={activeStep} />

      <div className="step">
        {activeStep === 0 && (
          <Step1
            setActiveStep={setActiveStep}
            tokenname={tokenname}
            settokenname={settokenname}
            purchaseamount={purchaseamount}
            setpurchaseamount={setpurchaseamount}
          />
        )}
        {activeStep === 1 && (
          <Step2
            setActiveStep={setActiveStep}
            tokenname={tokenname}
            asset1={asset1}
            asset2={asset2}
            asset3={asset3}
            setasset1={setasset1}
            setasset2={setasset2}
            setasset3={setasset3}
            percent1={percent1}
            percent2={percent2}
            percent3={percent3}
            setpercent1={setpercent1}
            setpercent2={setpercent2}
            setpercent3={setpercent3}
            createFund={createFund}
          />
        )}
        {activeStep === 2 && (
          <Step3
            setActiveStep={setActiveStep}
            tokenname={tokenname}
            asset1={asset1}
            asset2={asset2}
            asset3={asset3}
            percent1={percent1}
            percent2={percent2}
            percent3={percent3}
            setpercent1={setpercent1}
            setpercent2={setpercent2}
            setpercent3={setpercent3}
          />
        )}
      </div>
    </div>
  )
}
