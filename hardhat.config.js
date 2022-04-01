/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");



module.exports = {
   solidity: "0.7.3",
   networks: {
      localhost: { url: "http://127.0.0.1:8545" },
      hardhat: {},
     /**  ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }*/
   },
}