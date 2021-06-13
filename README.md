# hardhat-deployer

A repository for deploying Solidity smart contracts to EVM compatible chains.

_Leveraging [Hardhat](https://hardhat.org/) and [Open Zeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)_

## Requirements

NodeJS v14.16.1

## Installation

```shell script
$ npm install
```

## Contract Deployment

1. Create a `.env` file:

```env
DEPLOYER_PRIVATE_KEY=<PRIVATE_KEY_WITHOUT_0X_PREFIX>
INFURA_PROJECT_ID=<INFURA_PROJECT_ID> (Ethereum only)
```

2. Fund your account with the corresponding protocol token. Use the following faucets for testnet:

- [Kovan Testnet Faucet](https://faucet.kovan.network/)
- [BSC Testnet Faucet](https://testnet.binance.org/faucet-smart)

3. Deploy your contract

```shell script
npx hardhat deploy --network <NETWORK> --tags <SOLIDITY_CONTRACT>
```

The `NETWORK` must be defined in `hardhat.config.ts`.

To add a network to the configuration file, add an object key under `networks` with:

- The JSON-RPC URL.
- The corresponding chain ID (listed [here](https://chainid.network/))

For example, to deploy `ERC20.sol` to the `Kovan` testnet:

```shell script
npx hardhat deploy --network kovan --tags ERC20
```

A deployment will be recorded in the `deployments/` folder under the relevant network with the contract address and EVM bytecode.

Adding the `--reset` option to the above command resets the deployments from scratch – ignoring
previous deployments and deleting them from the disk.
