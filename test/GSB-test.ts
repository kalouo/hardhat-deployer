import { expect } from 'chai';
import { ethers } from 'hardhat';

const { BigNumber } = ethers;

describe('ERC20', function () {
  it('should deploy GSB contract with the correct initialisation parameters', async () => {
    const [owner] = await ethers.getSigners();

    const GSB = await ethers.getContractFactory('GSB', owner);

    const decimalFactor = BigNumber.from(10).pow(18);
    const maxSupply = BigNumber.from(1000000).mul(decimalFactor);
    const initialSupply = BigNumber.from(1000000).mul(decimalFactor);

    const GSBContract = await GSB.deploy(initialSupply);

    await GSBContract.deployed();

    const symbol = await GSBContract.symbol();
    const name = await GSBContract.name();
    const cap = await GSBContract.cap();
    const totalSupply = await GSBContract.totalSupply();

    expect(symbol).to.equal('GSB');
    expect(name).to.equal('Grand St. Bernard');
    expect(totalSupply).to.equal(initialSupply);
    expect(cap).to.equal(maxSupply);

    /* ADMIN ROLES */
    const pauser = await GSBContract.PAUSER_ROLE();
    const minter = await GSBContract.MINTER_ROLE();
  });

  it('should not allow minting more than the cap', async () => {
    const [owner] = await ethers.getSigners();

    const GSB = await ethers.getContractFactory('GSB', owner);

    const decimalFactor = BigNumber.from(10).pow(18);
    const maxSupply = BigNumber.from(1000000).mul(decimalFactor);

    const GSBContract = await GSB.deploy(maxSupply);

    await GSBContract.deployed();

    await expect(GSBContract.connect(owner).mint(owner.address, 100)).to.be.revertedWith(
      'ERC20Capped: cap exceeded'
    );
  });
});
