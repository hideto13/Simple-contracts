const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return incremented value", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.value()).to.equal(0);

    const increment = await counter.increment(1);

    // wait until the transaction is mined
    await increment.wait();

    expect(await counter.value()).to.equal(1);

    });
});