const PancakeFactory = artifacts.require("PancakeFactory");
const IPancakePair = artifacts.require("IPancakePair");
const IERC20 = artifacts.require("IERC20");

module.exports = async function (deployer, network, accounts) {

  const queryPairInfo = async (pairAddress) => {
    const pair = await IPancakePair.at(pairAddress)
    const tokenA = await IERC20.at(await pair.token0())
    const tokenB = await IERC20.at(await pair.token1())

    console.log(`PairAddress: ${pairAddress}`)
    console.log(`PairLPName: ${await pair.name()}`)
    console.log(`PairLPSymbol: ${await pair.symbol()}`)
    console.log(`TokenA: {name:${await tokenA.name()}, symbol:${await tokenA.symbol()}, address:${tokenA.address}}`)
    console.log(`TokenB: {name:${await tokenB.name()}, symbol:${await tokenB.symbol()}, address:${tokenB.address}}`)
  }

  await queryPairInfo('0x6753C81d76B2Ce387FdC0Aa36e286ec8Be034E2b');

  console.log('\n');
  await queryPairInfo('0x8E282Fc58d281c43914f72f61aD22D729A7D569F');

  // const Factory = await PancakeFactory.at('0xf7302cacB503d142aEbB7314edD870CDc59b794E');

  // const Pair = await Factory.getPair.call('0x41515885251e724233c6cA94530d6dcf3A20dEc7', '0xD538e79912E1A28014e7e5F0cB06e9c0b54bC84b');

  // console.log(Pair);

  throw 'Successed';
};
