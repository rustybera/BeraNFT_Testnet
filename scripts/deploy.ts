import { setBlockGasLimit } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { ethers } from 'hardhat';

async function main() {
  const signer = (await ethers.getSigners())[0];
  console.log("chain id: ", await ethers.provider.getNetwork().then(network => network.chainId));
  console.log("deloyer address: ", signer.address);

  // let Hardhat deploy the contract
  // const nft = await ethers.deployContract('NFT');
  // await nft.waitForDeployment();
  // const address = nft.target;

  // or deploy the contract manually
  const nftFactory = await ethers.getContractFactory('NFT');
  const tx = await signer.sendTransaction({data: nftFactory.bytecode, gasLimit: 10000000})
  console.log('Transaction Hash: ' + tx.hash);
  const receipt = await tx.wait();
  const address = receipt!.contractAddress;

  console.log('NFT Contract Deployed at ' + address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
