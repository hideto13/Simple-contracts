module.exports = async ({
  ethers,
  getNamedAccounts,
  deployments,
  getChainId,
}) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();

  await deploy('MyToken', {
    from: deployer,
    gasLimit: 8000000,
    log: true,
  });

  const collection = await ethers.getContract('MyToken');

  if (chainId === '31337' || chainId === '1337') {

  }
};