import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar'
import Sidebar from './layout/sidebar/Sidebar'
import Footer from './layout/footer/Footer'
import Dashboard from './dashboard/Dashboard'
import IndexDetails from './index-details/IndexDetails'
import CreateTokens from './create-tokens/CreateTokens'
import Howitworks from './howitworks/Howitworks'
import { useActiveProvider } from '../connectors'
// import Web3Modal from 'web3modal'
// import UAuth from '@uauth/js'

import SwapFromUniswap from './SwapFromUniswap'
import ExploreFunds from './explore-funds/ExploreFunds'
import styles from '../styles/Home.module.css'
export default function App() {
  const provider = useActiveProvider()

  const getBalance = async () => {
    const signer = provider.getSigner()
    const account = await signer.getAddress()

    const options = { method: 'GET', headers: { accept: 'application/json', 'X-API-Key': 'test' } }

    fetch(`https://deep-index.moralis.io/api/v2/${account}/balance`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response)
        // setNFTs(response.result)
      })
      .catch((err) => console.error(err))
  }

  return (
    <BrowserRouter className={styles.container}>
      <Routes>
        <Route
          path="/index-funds/:fundid"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <IndexDetails />
            </div>
          }
        />
        <Route
          path="/explore-funds"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <ExploreFunds />
            </div>
          }
        />
        <Route
          path="/works"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <Howitworks />
            </div>
          }
        />
        <Route
          path="/create-tokens"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <CreateTokens />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <Dashboard />
            </div>
          }
        />
      </Routes>

      {/* <div>
        <Footer />
      </div> */}
    </BrowserRouter>
  )
}
