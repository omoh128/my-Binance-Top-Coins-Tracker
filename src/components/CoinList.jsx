import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoinList.css';

const CoinList = () => {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const fetchSymbols = async () => {
      const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
      const symbols = response.data.symbols
        .filter(symbol => symbol.status === 'TRADING')
        .map(symbol => ({
          symbol: symbol.symbol,
          baseAsset: symbol.baseAsset,
          quoteAsset: symbol.quoteAsset
        }));
      setSymbols(symbols);
    };
    fetchSymbols();
  }, []);

  return (
    <div className="coin-list">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Base Asset</th>
            <th>Quote Asset</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map(symbol => (
            <tr key={symbol.symbol}>
              <td>{symbol.symbol}</td>
              <td>{symbol.baseAsset}</td>
              <td>{symbol.quoteAsset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
