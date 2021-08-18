import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
    ethers,
  } = hre;

    const { deployer } = await getNamedAccounts();

    const { BigNumber } = ethers;

    const decimalFactor = BigNumber.from(10).pow(18);
    const maxSupply = ethers.BigNumber.from(1_000_000).mul(decimalFactor).toString();
    console.log(maxSupply)
    const {
      receipt: { contractAddress },
    } = await deploy('GSB', {
      from: deployer,
      args: [maxSupply],
      log: true,
    });

    /* Wait for 30 seconds before Etherscan verification */
    await new Promise((resolve) => setTimeout(resolve, 30000));

    await hre.run('verify:verify', {
      address: contractAddress,
      constructorArguments: [maxSupply],
    });
};

export default func;
func.tags = ['GSB'];
