const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      network_id: '*',
      gas: 4712388
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider([process.env.ROPSTEN_KEY], `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
      },
      network_id: '3',
      from: '0xc8f05Cc9b9c1364eF8Bb0f24e8f5569968B633Ce'
    }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 1
    }
  },
  compilers: {
    solc: {
      version: "0.7.4",
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
