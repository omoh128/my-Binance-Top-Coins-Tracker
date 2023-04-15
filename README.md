Binance Top Coins Tracker
This is a simple web app that monitors the top performing coins on Binance and notifies the user when a coin experiences a significant increase in buying volume within the last minute.

Installation
To install the app, simply clone the repository and run npm install to install the dependencies:

bash
Copy code
git clone https://github.com/your-username/binance-top-coins-tracker.git
cd binance-top-coins-tracker
npm install
Usage
To start the app, run npm start:

sql
Copy code
npm start
This will start the app on http://localhost:3000. You can view the app in your web browser by navigating to that URL.

When you first load the app, it will display a list of the top performing coins on Binance. If a coin experiences a significant increase in buying volume within the last minute, the app will display a notification with the coin's symbol and the volume increase.

Credits
It uses the Binance API to retrieve real-time data on cryptocurrency prices and volumes. The app was built using React and Node.js.