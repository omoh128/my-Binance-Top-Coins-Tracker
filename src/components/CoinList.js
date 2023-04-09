import React from 'react'
import CoinListItem from './CoinListItem'

const CoinList = ({ coins }) => {
  return (
    <ul>
      {coins.map((coin) => (
        <CoinListItem key={coin.symbol} coin={coin} />
      ))}
    </ul>
    
  )
}

export default CoinList