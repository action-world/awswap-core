const tool = require('@ethersproject/solidity');
const PancakePair = artifacts.require("PancakePair");
const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(PancakeFactory,
    accounts[0]
  );

  const INIT_CODE_HASH = tool.keccak256(['bytes'], [`${PancakePair.bytecode}`]);
  console.log(`PancakePair InitCodeHash: ${INIT_CODE_HASH}`);
};
