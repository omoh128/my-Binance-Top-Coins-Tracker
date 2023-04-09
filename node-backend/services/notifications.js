const sendNotification = (coin) => {
    console.log(`New notification: ${coin.symbol} has significant increase in buying volume!`)
    // You could use a service like Pushover, Slack, or SendGrid to send notifications
    // based on your preferred notification method
  }
  
  module.exports = { sendNotification }
  