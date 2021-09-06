const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function() {
	beforeEach(async function() {
		this.Token = await ethers.getContractFactory("MyToken");
		this.token = await this.Token.deploy();
		await this.token.deployed();
	});

	it("Should return name", async function() {
		expect(await this.token.name()).to.equal("Very Bad Token");

	});
	it("Should return symbol", async function() {
		expect(await this.token.symbol()).to.equal("VBT");

	});
	it("Should return decimals", async function() {
		expect(await this.token.decimals()).to.equal(2);
	});
    it("Should return zero balance", async function() {
		expect(await this.token.totalSupply()).to.equal(0);

	});
});