require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require('hardhat-deploy-ethers');

const accounts = {
  mnemonic: `${process.env.MNEMONIC}`,
};

module.exports = {
  paths: {
    artifacts: 'artifacts',
    cache: 'cache',
    deploy: 'deploy',
    deployments: 'deployments',
    imports: 'imports',
    sources: 'contracts',
    tests: 'test',
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY_API_KEY}`,
      accounts,
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
      gasPrice: 8000000000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.7',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};