require("@nomiclabs/hardhat-waffle")
/**
 * @type string
 * require("@nomicfoundation/hardhat-toolbox")
 * */

const ALCHEMY_API_KEY = "uwjINlWUAdkdWspeydqx7ymyaU_lBVyA";
const META_MASK_GOERLI_PRIVATE_KEY = "2cd76085a3cd07399955655ba688f8a9735c82705e2456c0308458851dcf322b";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [META_MASK_GOERLI_PRIVATE_KEY]
    }
  }
};
