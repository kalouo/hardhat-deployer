//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract _ERC20 is ERC20 {
    constructor (string memory _name, string memory _symbol) ERC20(_name, _symbol) {}
}
