import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('ERC20', function () {
  it('should deploy ERC-20 with the correct name and symbol', async () => {
    const ERC20 = await ethers.getContractFactory('ERC20');
    const ZipContract = await ERC20.deploy('Zips', 'ZIP');

    await ZipContract.deployed();
    const symbol = await ZipContract.symbol();
    const name = await ZipContract.name();
    expect(symbol).to.equal('ZIP');
    expect(name).to.equal('Zips');
  });
});
