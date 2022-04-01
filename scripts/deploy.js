const hrc = require("hardhat")

const main = async () =>{
  const DitoFarm = await hre.ethers.getContractFactory("HelloWorld")
  const ditofarm = await DitoFarm.deploy("hello world")

  await ditofarm.deployed()
  console.log('contract address:',  ditofarm.address )
}

main()