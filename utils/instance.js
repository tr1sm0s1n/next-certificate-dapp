import { ethers } from 'ethers'
import Cert from '../artifacts/contracts/Cert.sol/Cert.json'
import details from './details.json'

export const provider = new ethers.providers.JsonRpcProvider(
  'http://127.0.0.1:8545'
)
const signer = provider.getSigner()
export const contractInstance = new ethers.Contract(
  details.contract,
  Cert.abi,
  signer
)
