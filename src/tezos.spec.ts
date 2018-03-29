import {expect} from "chai";
import "mocha";
import {Tezos} from "./tezos";
import {Block} from "./vo/block";
import {Contract} from "./vo/contract";

describe("Tezos", () => {
    it("should fetch the nth block", (done) => {
        const tezos = new Tezos();

        tezos.getBlock(0).then((block) => {
            expect(block).to.be.instanceOf(Block);

            tezos.getBlock(1).then((prevBlock) => {
                expect(prevBlock).to.be.instanceOf(Block);
                expect(prevBlock.hash).to.equal(block.predecessor);
                done();
            });
        });
    }).timeout(5000);

    it("should fetch a contract", (done) => {
        const tezos = new Tezos();

        tezos.getContract("TZ1XFzPQDEMozV8TyjAt9YXBu3pMXibaoCBb")
            .then((contract) => {
                expect(contract.spendable).to.equal(true);
                expect(contract.delegatable).to.equal(true);
                expect(contract).to.be.instanceOf(Contract);
                expect(contract.manager).to.equal("tz1hN51Tu64JPkrvTm6V59Cz4UjuCLoRZkbB");
                done();
            });
    }).timeout(5000);

    it("should fetch operations", (done) => {
        const tezos = new Tezos();

        tezos.getOperations("BKiZgmeqtvcpUnt4ZD7GwB13sUkU7d7BcKhZqdRMo5bLRmSm5i7")
            .then((operations) => {
                expect(operations).to.have.length(21);
                expect(operations[0].hash).to.be.equal("onis37bL1znaHbwQBgtjMrEJXtzHKu4anj9qo8QbyhUJ26oTxCX");
                done();
            });
    }).timeout(5000);
});
