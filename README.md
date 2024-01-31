# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a
script that deploys that contract.

## To deploy on a local fork

Spin up a local fork:

```shell
npx hardhat node --fork https://artio.rpc.berachain.com/
```

Run the deploy script in a new terminal:

```shell
npx hardhat run scripts/deploy.ts --network berachain-local
```

## To deploy on the live testnet

```shell
npx hardhat run scripts/deploy.ts --network berachain-artio
```
