import React from 'react'

const CoinListItem = ({ coin }) => {
  return (
    <li>
    <h2>{coin.symbol}</h2>
    <p>Price: {coin.price}</p>
    <p>Volume: {coin.volume}</p>
  </li>
  )
}

export default CoinListItem