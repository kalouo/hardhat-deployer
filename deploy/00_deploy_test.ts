import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { deployer } = await getNamedAccounts();

  await deploy('ERC20', {
    from: deployer,
    args: ['Zips', 'ZIP'],
    log: true,
  });
};

export default func;
func.tags = ['ERC20'];
