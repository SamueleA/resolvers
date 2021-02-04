var PublicResolver = artifacts.require("./PublicResolver.sol");

module.exports = function(deployer) {
  deployer.deploy(PublicResolver, "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e");
};
