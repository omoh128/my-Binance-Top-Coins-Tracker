const Binance = require('node-binance-api')

const binance = new Binance()

const getTopCoins = async () => {
  const tickers = await binance.prices()

  // Sort the tickers by descending order of price
  const sortedTickers = Object.entries(tickers).sort((a, b) => b[1] - a[1])

  // Get the top 10 tickers
  const topTickers = sortedTickers.slice(0, 10)

  // Get the volume for each ticker
  const volumes = await Promise.all(
    topTickers.map(([symbol]) => binance.prevDay(symbol))
  )

  // Add the volume to each ticker and return the result
  return topTickers.map(([symbol, price], index) => ({
    symbol,
    price,
    volume: volumes[index].volume
  }))
}

module.exports = { getTopCoins }
