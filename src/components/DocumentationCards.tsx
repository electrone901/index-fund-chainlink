import styles from '../styles/Cards.module.css'

import { FaGithub, FaDiscord, FaRocket } from 'react-icons/fa'
import { BsBook, BsInfoCircle } from 'react-icons/bs'

export default function DocumentationCards() {
  return (
    <div className={styles.grid}>
      <a href="https://docs.uniswap.org/" className={styles.card}>
        <div className={styles.row}>
          <BsBook />↗
        </div>
        <h3>How it Works?</h3>
        <p>Explore the Swap Widget&apos;s features and API.</p>
      </a>

      <a href="https://docs.uniswap.org/sdk/widgets/swap-widget" className={styles.card}>
        <div className={styles.row}>
          <BsInfoCircle />↗
        </div>
        <h3>Step 1</h3>
        <p>Hop into #widgets for realtime help.</p>
      </a>

      <a href="https://discord.gg/ybKVQUWb4s" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaRocket className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Step 2</h3>
            <p>Hop into #widgets for realtime help.</p>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/Uniswap/interface/blob/main/src/lib/index.tsx"
        className={styles.card + ' ' + styles.external}
      >
        <div className={styles.row}>
          <FaRocket className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Step 3</h3>
            <p>View the Swap Widget&apos;s source.</p>
          </div>
        </div>
      </a>
    </div>
  )
}
