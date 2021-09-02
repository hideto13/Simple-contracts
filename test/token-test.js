const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("Should return zero balance", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy();
    await token.deployed();

    expect(await token.totalSupply()).to.equal(0);

    });
});