const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function() {
	beforeEach(async function() {
		this.Counter = await ethers.getContractFactory("Counter");
		this.counter = await this.Counter.deploy();
		await this.counter.deployed();
	});

	it("Return correct value", async function() {
		expect(await this.counter.value()).to.equal(0);

		const increment = await this.counter.increment(1);

		// wait until the transaction is mined
		await increment.wait();

		expect(await this.counter.value()).to.equal(1);

	});
	describe("Set few increments", async function() {
		beforeEach(async function() {

			const increment = await this.counter.increment(1);

			expect(await this.counter.value()).to.equal(1);
		});

		it("Should return incremented value", async function() {

			const increment = await this.counter.increment(2);

			expect(await this.counter.value()).to.equal(3);

		});

	});

});