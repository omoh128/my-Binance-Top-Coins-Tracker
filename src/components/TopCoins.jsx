import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopCoins.css';

const TopCoins = ({ limit }) => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const fetchTopCoins = async () => {
      const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?limit=${limit}`);
      const coins = response.data.map(coin => ({
        symbol: coin.symbol,
        priceChangePercent: coin.priceChangePercent,
        volume: coin.volume
      }));
      setTopCoins(coins);
    };
    fetchTopCoins();
  }, [limit]);

  return (
    <div className="top-coins">
      <h2>Top Performing Coins (Last 24 Hours)</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price Change (%)</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {topCoins.map((coin, index) => (
            <tr key={coin.symbol}>
              <td>{coin.symbol}</td>
              <td className={coin.priceChangePercent >= 0 ? 'positive' : 'negative'}>{coin.priceChangePercent.toFixed(2)}</td>
              <td>{coin.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCoins;
