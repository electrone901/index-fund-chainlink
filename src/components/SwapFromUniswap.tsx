import { useCallback, useRef, useState } from 'react'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'
import Web3Connectors from './Web3Connectors'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ChartGraph from './ChartGraph'
import logoIndex1 from '../images/1.svg'
import logoIndex2 from '../images/2.svg'
import logoIndex3 from '../images/3.svg'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

export default function SwapFromUniswap() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])

  return (
    <div className={styles.container}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <h1>Dashboard</h1>
          <Typography variant="body2">TOTAL BALANCE</Typography>
          <p className={styles.price}>$ 23,756.88</p>
          <div className={styles.flex}>
            <div className={styles.card}>
              <div className={styles.flex}>
                <Avatar alt="index 1" src={logoIndex1} />
                <p className={styles.paddingLeft}>Fund</p>
                <br />
                <br />
              </div>
              <ChartGraph />
              <p className={styles.margin0}>USD 3500.96</p>
              <p className={styles.greenPrice}>+121.37 (3.46%)</p>
            </div>

            <div className={styles.card}>
              <div className={styles.flex}>
                <Avatar alt="index 1" src={logoIndex2} />
                <p className={styles.paddingLeft}> Fund</p>
              </div>
              <ChartGraph />
              <p className={styles.margin0}>USD 3500.96</p>
              <p className={styles.redPrice}>-54.62 (3.21%)</p>
            </div>

            <div className={styles.card}>
              <div className={styles.flex}>
                <Avatar alt="index 1" src={logoIndex3} />
                <p className={styles.paddingLeft}> Fund</p>
              </div>
              <ChartGraph />
              <p className={styles.margin0}>USD 3500.96</p>
              <p className={styles.greenPrice}>-54.62 (3.21%)</p>
            </div>
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
                    <Avatar alt="index 1" src={logoIndex1} />
                    <p className={styles.paddingLeft}>Fund</p>
                  </div>
                  <p>+121.37 (3.46%)</p>
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className={styles.flexJustbetweenspace}>
                  <div className={styles.flex}>
                    <Avatar alt="index 1" src={logoIndex3} />
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
                    <Avatar alt="index 1" src={logoIndex3} />
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
                    <Avatar alt="index 1" src={logoIndex3} />
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
                    <Avatar alt="index 1" src={logoIndex3} />
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
                    <Avatar alt="index 1" src={logoIndex3} />
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
            <Divider light />
            <div className={styles.flexJustbetweenspace}>
              <div className={styles.flex}>
                <Avatar alt="index 1" src={logoIndex2} />
                <div>
                  <p className={styles.paddingLeft}>Buy ETF Tokens</p>
                  <p className={styles.paddingLeft}>October 12, 2022</p>
                </div>
              </div>
              <div>
                <p>Purchase Amount</p>
                <p className={styles.grey}>Purchase Price</p>
              </div>
            </div>
            {/* Just replicate this  */}
            <Divider light />
            <div className={styles.flexJustbetweenspace}>
              <div className={styles.flex}>
                <Avatar alt="index 3" src={logoIndex1} />
                <div>
                  <p className={styles.paddingLeft}>Buy ETF Tokens</p>
                  <p className={styles.paddingLeft}>October 12, 2022</p>
                </div>
              </div>
              <div>
                <p>Purchase Amount</p>
                <p className={styles.grey}>Purchase Price</p>
              </div>
            </div>

            {/* Just replicate this  */}
            <Divider light />
            <div className={styles.flexJustbetweenspace}>
              <div className={styles.flex}>
                <Avatar alt="index 3" src={logoIndex3} />
                <div>
                  <p className={styles.paddingLeft}>Buy ETF Tokens</p>
                  <p className={styles.paddingLeft}>October 12, 2022</p>
                </div>
              </div>
              <div>
                <p>Purchase Amount</p>
                <p className={styles.grey}>Purchase Price</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
