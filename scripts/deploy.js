const hre = require('hardhat')
const fs = require('fs')

async function main() {
  const Cert = await hre.ethers.getContractFactory('Cert')
  const cert = await Cert.deploy()
  await cert.deployed()

  let details = {
    deployer: cert.signer.address,
    contract: cert.address,
  }

  console.log(
    `Account: ${details.deployer} deployed Contract: ${details.contract}`
  )

  fs.writeFile(
    './utils/details.json',
    JSON.stringify(details, null, 2),
    (err) => {
      if (err) {
        return console.log(err)
      }
      return console.log('Details are saved!!')
    }
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
