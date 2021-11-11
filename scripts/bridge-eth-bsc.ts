/* eslint-disable no-console */
import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';
import { BridgeETH } from '../typechain/BridgeETH';
// eslint-disable-next-line camelcase
import { BridgeETH__factory } from '../typechain/factories/BridgeETH__factory';
// Addresses in Rinkeby
import * as BRIDGEETH from '../deployments/rinkeby/BridgeETH.json';

/**
 * main function
 */
async function main() {
  const [owner] = await ethers.getSigners();

  const bridgeETH: BridgeETH = BridgeETH__factory.connect(BRIDGEETH.address, owner);

  bridgeETH.on('Transfer', () => {  // When we detect the Transfer event
    console.log('Transfer');
  });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
