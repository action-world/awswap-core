const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async function (deployer, network, accounts) {

  const Factory = await PancakeFactory.at('0xeaBD4A0497958878D1Fdb87b9B582284A781cAD1');

  const Pair = await Factory.getPair.call('0xbAE96Cd6C3f104D606D836e7B137AB220edF5a6b', '0x59B8c2E50402D18dA0083Ea8a1168B8bFB6994b6');

  console.log(Pair);
};
