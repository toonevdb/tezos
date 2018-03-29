"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var block_1 = require("./vo/block");
var contract_1 = require("./vo/contract");
var operation_1 = require("./vo/operation");
/**
 * Tezos rpc client.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
var Tezos = /** @class */ (function () {
    /**
     * Create a new instance.
     *
     * @param nodeUrl Url of the rpc node
     */
    function Tezos(nodeUrl) {
        /**
         * URL of the rpc node.
         */
        this.nodeUrl = "https://tezrpc.me/zeronet";
        if (nodeUrl) {
            this.nodeUrl = nodeUrl;
        }
        this.client = axios_1.default.create({
            baseURL: this.nodeUrl,
        });
    }
    /**
     * Fetches the HEAD~n block.
     *
     * Use 0 to fetch HEAD.
     *
     * @param n Delta from HEAD to fetch
     */
    Tezos.prototype.getBlock = function (n) {
        return this.query("/blocks/head~" + n).then(function (response) {
            var getHash = function (op) {
                return op.hash;
            };
            return new block_1.Block({
                chainId: response.data.chain_id,
                context: response.data.context,
                fitness: response.data.fitness,
                hash: response.data.hash,
                level: response.data.level,
                operations: response.data.operations.map(getHash),
                operationsHash: response.data.operationsHash,
                predecessor: response.data.predecessor,
                proto: response.data.proto,
                protocol: response.data.protocol,
                protocolData: response.data.protocolData,
                timestamp: response.data.timestamp,
            });
        });
    };
    /**
     * Fetch the contract associated with the address.
     *
     * @param address Contract address
     */
    Tezos.prototype.getContract = function (address) {
        return this.query("/blocks/head/proto/context/contracts/" + address)
            .then(function (response) {
            return new contract_1.Contract({
                balance: response.data.balance,
                counter: response.data.counter,
                delegatable: response.data.delegate.setable,
                delegate: response.data.delegate.value,
                manager: response.data.manager,
                spendable: response.data.spendable,
            });
        });
    };
    /**
     * Get the operations contained in the block.
     *
     * @param blockId Block hash or identifier
     */
    Tezos.prototype.getOperations = function (blockId) {
        return this.query("/blocks/" + blockId + "/proto/operations")
            .then(function (response) {
            return response.data[0].map(function (el) {
                return new operation_1.Operation({
                    block: el.block,
                    branch: el.branch,
                    hash: el.hash,
                    kind: el.kind,
                    level: el.level,
                    signature: el.signature,
                    slots: el.slots,
                });
            });
        });
    };
    /**
     * Query the node.
     *
     * @param url Url to post to
     * @param data Data to send
     */
    Tezos.prototype.query = function (url, data) {
        return this.client.post(url, data);
    };
    return Tezos;
}());
exports.Tezos = Tezos;
