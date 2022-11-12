import { useCallback, useRef, useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { SERVER_URL } from '../../constants'
import './ExploreFunds.css'

import BasicTable from './BasicTable'


export default function ExploreFunds() {
  const [indexfunds, setindexfunds] = useState([])

  useEffect(() => {
    getFunds()
  }, [])

  const getFunds = async () => {
    const response = await fetch(SERVER_URL + 'fund/getallfunds');
    const data = await response.json();
    console.log(data);
    setindexfunds(data)
  }
  
  return (
    <div className={styles.container}>
      <h1>ExploreFunds</h1>
      <Typography variant="body1">
        Top Performers
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <div className='groupflex'>
              <AvatarGroup  max={4}>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
              </AvatarGroup>
            </div>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.greenPrice}>+121.37 (3.46%)</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <div className='groupflex'>
             <AvatarGroup  max={4}>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
              </AvatarGroup>
            </div>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.redPrice}>-54.62 (3.21%)</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <div className='groupflex'>
             <AvatarGroup  max={4}>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
              </AvatarGroup>
            </div>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.redPrice}>-54.62 (3.21%)</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <div className='groupflex'>
             <AvatarGroup  max={4}>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
              </AvatarGroup>
            </div>
            
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.redPrice}>-54.62 (3.21%)</p>
          </div>
        </Grid>
      </Grid>
      <div className={styles.table}>
        <h3>All Funds</h3>
        <BasicTable indexfunds={indexfunds} />
      </div>
    </div>
  )
}
