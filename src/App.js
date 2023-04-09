import React, { useEffect, useState } from 'react';
import CoinList from './components';
import { getTopCoins } from './services/binance'
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const fetchTopCoins = async () => {
      const coins = await getTopCoins()
      setCoins(coins)
    }

    fetchTopCoins()
  }, [])
  return (
    <div>
      <h1>Top Performing Coins</h1>
      <CoinList coins={coins} />
    </div>
  )
}

export default App
