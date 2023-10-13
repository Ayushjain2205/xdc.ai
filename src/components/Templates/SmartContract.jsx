import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
const contract = `/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BobaCoin is ERC20PresetMinterPauser, Ownable {
    event TokensLocked(address indexed account, uint256 amount, uint256 releaseTime);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    mapping(address => uint256) private _lockedBalances;
    mapping(address => uint256) private _releaseTimes;

    constructor(
        uint256 initialSupply,
        uint256 lockDurationDays
    ) ERC20PresetMinterPauser("Boba Coin", "BOBA") {
        _mint(msg.sender, initialSupply * 10 ** uint256(decimals()));
        _addMinter(msg.sender);
        _addPauser(msg.sender);

        uint256 lockDuration = lockDurationDays * 1 days;
        _lockTokens(msg.sender, initialSupply * 10 ** uint256(decimals()), lockDuration);
    }

    function lockTokens(address account, uint256 amount, uint256 lockDurationDays) public onlyOwner {
        uint256 lockDuration = lockDurationDays * 1 days;
        _lockTokens(account, amount, lockDuration);
    }

    function unlockTokens() public {
        uint256 amount = _lockedBalances[msg.sender];
        require(amount > 0, "No locked tokens");
        require(block.timestamp >= _releaseTimes[msg.sender], "Tokens are still locked");

        _lockedBalances[msg.sender] = 0;
        _releaseTimes[msg.sender] = 0;

        _transfer(address(this), msg.sender, amount);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        _transferOwnership(newOwner);
    }

    function renounceOwnership() public onlyOwner {
        _renounceOwnership();
    }

    function getLockedTokens(address account) public view returns (uint256 amount, uint256 releaseTime) {
        return (_lockedBalances[account], _releaseTimes[account]);
    }

    function _lockTokens(address account, uint256 amount, uint256 lockDuration) internal {
        require(account != address(0), "Lock to the zero address");
        require(amount > 0, "Lock amount must be greater than zero");

        uint256 releaseTime = block.timestamp + lockDuration;
        _lockedBalances[account] = amount;
        _releaseTimes[account] = releaseTime;

        emit TokensLocked(account, amount, releaseTime);
    }
}
`;

const SmartContract = () => {
  return (
    <div className="max-h-[500px] overflow-scroll">
      <CopyBlock
        language="js"
        text={contract}
        codeBlock
        theme={dracula}
        showLineNumbers={true}
      />
    </div>
  );
};

export default SmartContract;
