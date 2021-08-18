import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';

import 'hardhat-deploy';

import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID, ETHERSCAN_API_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.3',
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 1,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 42,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    bsc_testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    bsc_mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
