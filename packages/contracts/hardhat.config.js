require("hardhat/config");
require("dotenv").config();
require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("./tasks/verify-blockscout");

const {
  INFURA_PROJECT_ID,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API_KEY,
  CURRENCY,
} = process.env;

module.exports = {
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    artifacts: "./build",
  },
  networks: {
    sokol: {
      url: "https://sokol.poa.network",
      accounts: ["442e46e56fb53f19544b6788b359a2b28cf535f83d77088311b6956ba46e7589"],
      gasPrice: 1000000000,
    },
    xdai: {
      url: "https://rpc.xdaichain.com",
      accounts: ["442e46e56fb53f19544b6788b359a2b28cf535f83d77088311b6956ba46e7589"],
      gasPrice: 1000000000,
    },
    kovan: {
      url: "https://kovan.infura.io/v3/3b5a7e5210714ab9987bed6f373848a3",
      accounts: ["442e46e56fb53f19544b6788b359a2b28cf535f83d77088311b6956ba46e7589"],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/3b5a7e5210714ab9987bed6f373848a3",
      accounts: ["442e46e56fb53f19544b6788b359a2b28cf535f83d77088311b6956ba46e7589"],
    },
    local: {
      url: "http://127.0.0.1:8555",
      defaultBalanceEther: 1000,
      accounts: ["1345eef48a006109c674b012c6352a89a19b25c81ed80c6dc316b9a6e3ddb0ab"],
    },
    metertest: {
      url: "https://rpctest.meter.io/",
      accounts: ["442e46e56fb53f19544b6788b359a2b28cf535f83d77088311b6956ba46e7589"],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/3b5a7e5210714ab9987bed6f373848a3",
      accounts: ["442e46e56fb53f19544b6788b359a2b28cf535f83d77088311b6956ba46e7589"],
      gasPrice: 4500000000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: process.env.CURRENCY,
  },
};
