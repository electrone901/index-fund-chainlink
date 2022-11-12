import { useCallback, useRef, useState, useEffect } from 'react'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import Button from '@mui/material/Button'
import { useActiveProvider } from '../../connectors'
import { JSON_RPC_URL } from '../../constants'
import Web3Connectors from '../Web3Connectors'
import styles from '../../styles/Home.module.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ChartGraph from '../ChartGraph'
import logoIndex1 from '../../images/1.svg'
import logoIndex2 from '../../images/2.svg'
import logoIndex3 from '../../images/3.svg'
import { SERVER_URL } from '../../constants'
import { sellIndex } from '../../MoralisHelper'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

export default function Dashboard() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef < HTMLDivElement > null
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])

  const [totalbalance, settotalbalance] = useState('0')
  const [indexfunds, setindexfunds] = useState([])
  const [transactions, settransactions] = useState([])
  const [tokens, settokens] = useState([])

  useEffect(() => {
    if (provider) connectWallet()
  }, [provider])

  useEffect(() => {
    if (provider) getIndexFunds()
  }, [provider])

  useEffect(() => {
    if (provider) getRecentTransactions()
  }, [provider])

  //  returns transaction history, balance, tokens owned and created by address
  const connectWallet = async () => {
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    console.log(address)

    const response = await fetch(SERVER_URL + 'user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: address,
      }),
    })
    const data = await response.json()
    console.log(data)
    settotalbalance(data.total)
  }

  const getIndexFunds = async () => {
    const signer = provider.getSigner()
    const address = await signer.getAddress()

    const response = await fetch(SERVER_URL + 'fund/getallfundsbyuser/' + address)
    const data = await response.json()
    console.log(data)
    setindexfunds(data)
  }

  const getRecentTransactions = async () => {
    const signer = provider.getSigner()
    const address = await signer.getAddress()

    const response = await fetch(SERVER_URL + 'transaction/getrecenttransactions/' + address)
    const data = await response.json()
    console.log(data)
    settransactions(data)
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <h1>Dashboard</h1>
          <Typography variant="body2">TOTAL BALANCE</Typography>
          <p className={styles.price}>$ {totalbalance}</p>

          <div className={styles.flex}>
            {indexfunds.map((i) => (
              <div className={styles.card} key={i.id}>
                <div className={styles.flex}>
                  <Avatar alt="index 1" src={logoIndex2} />
                  <p className={styles.paddingLeft}> {i.tokenname}</p>
                  <Button onClick={sellIndex} style={{ marginLeft: ' 50px' }} variant="contained" color="secondary">
                    Sell
                  </Button>
                </div>
                <br />
                <ChartGraph />
                <p className={styles.margin0}>USD {i.price}</p>
                <p className={styles.redPrice}>-0.50 (1%)</p>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* <div className={styles.connectors} ref={connectors} tabIndex={-1}>
            <Web3Connectors />
          </div> */}
          <br />
          <br />
          <br />
          <div className={styles.widget}>
            <SwapWidget
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              locale={locale}
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
              defaultOutputTokenAddress={UNI}
              className={styles.swapContainer}
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.table}>
            <h3>Weekly Top Performers</h3>
            {/* just replicate it  */}
            <Divider light />
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/bitcoin.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/avalanche.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>
            </Grid>
            {/* just replicate it  */}
            <Divider light />
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src={logoIndex1} />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/wrapped-bitcoin.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>
            </Grid>
            {/* just replicate it  */}
            <Divider light />
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/usd-coin.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/bitcoin-cash.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>
            </Grid>
            {/* just replicate it  */}
            <Divider light />
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/ultra.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/gemini-dollar.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>
            </Grid>
            {/* just replicate it  */}
            <Divider light />
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/mxc.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src="https://cryptologos.cc/logos/thumbs/filecoin.png" />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={4}>
          <div className={styles.table}>
            <div className={styles.flexJustbetweenspace}>
              <h3>Recent Transactions</h3>
              <p className={styles.grey}>View All</p>
            </div>
            {/* Just replicate this  */}
            {transactions.map((t) => (
              <div key={t.id}>
                <Divider light />
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src={logoIndex2} />
                    <div>
                      <p className={styles.paddingLeft}>
                        {t.typeoftransaction} {t.nameoffund}
                      </p>
                      <p className={styles.paddingLeft}>{t.dateh}</p>
                    </div>
                  </div>
                  <div>
                    <p>{t.amount}</p>
                    <p className={styles.grey}>$ {t.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
