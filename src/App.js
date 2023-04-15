import React, { useState, useEffect } from 'react';
import TopCoins from './components/TopCoins';
import Notification from './components/Notification';
import './App.css';

const App = () => {
  const [notifSymbol, setNotifSymbol] = useState('');
  const [notifVolume, setNotifVolume] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchVolumeData = async () => {
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        const coins = await response.json();
        coins.forEach(coin => {
          if (coin.symbol === notifSymbol && coin.volume > notifVolume) {
            setNotifVolume(coin.volume);
          }
          else if (coin.volume > 100000 && coin.volume > notifVolume) {
            setNotifSymbol(coin.symbol);
            setNotifVolume(coin.volume);
          }
        });
      };
      fetchVolumeData();
    }, 60000);

    return () => clearInterval(interval);
  }, [notifSymbol, notifVolume]);

  return (
    <div className="app">
      {notifVolume > 0 && <Notification symbol={notifSymbol} volume={notifVolume} />}
      <TopCoins limit={10} />
    </div>
  );
};

export default App;
