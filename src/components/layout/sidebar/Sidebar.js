import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../../images/logo_.png'
import Web3Connectors from '../../Web3Connectors'

const Sidebar = () => {
  return (
    <div className="main">
      <div className="cointainer-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <Link to="/" className="sideLink">
        Dashboard
      </Link>
      <Link to="/create-tokens" className="sideLink">
        Create Tokens
      </Link>

      <Link to="/explore-funds" className="sideLink">
        Explore Funds
      </Link>
      <Link to="/" className="sideLink">
        Trading Page
      </Link>
      <Link to="/works" className="sideLink">
        How it works
      </Link>

      <div className="web3ConnectorSidebar">
        <Web3Connectors />
      </div>

      <br />
    </div>
  )
}

export default Sidebar
