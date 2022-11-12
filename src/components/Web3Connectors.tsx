import styles from '../styles/Connectors.module.css'
import { connectors, getConnectorName, Web3Connector } from '../connectors'
import { useCallback } from 'react'
import { connectWallet } from '../MoralisHelper'

function Connector({ web3Connector }: { web3Connector: Web3Connector }) {
  const [connector, hooks] = web3Connector
  const isActive = hooks.useIsActive()
  connectWallet()
  const onClick = useCallback(() => {
    if (isActive) {
      connector.deactivate()
    } else {
      console.log(' connectors', connectors)
      connectors.forEach(([connector]) => {
        return connector.deactivate()
      })
      connector.activate()
    }
  }, [connector, isActive])

  return (
    <div className={styles.connector}>
      <label className={styles.connectorLabel}>{getConnectorName(connector).toLowerCase()}</label>
      <button onClick={onClick} className={`${isActive ? styles.connected : styles.disconnect}`}>
        {isActive ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  )
}

export default function Connectors() {
  return (
    <div className={styles.connectors}>
      {connectors.map((web3Connector, index) => (
        <Connector key={index} web3Connector={web3Connector} />
      ))}
    </div>
  )
}
