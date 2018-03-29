"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Block value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
var Block = /** @class */ (function () {
    /**
     * Create a new instance.
     *
     * @param data Data object
     */
    function Block(data) {
        this.hash = data.hash;
        this.chainId = data.chainId;
        this.operations = data.operations;
        this.protocol = data.protocol;
        this.level = data.level;
        this.proto = data.proto;
        this.predecessor = data.predecessor;
        this.timestamp = data.timestamp;
        this.operationsHash = data.operationsHash;
        this.fitness = data.fitness;
        this.context = data.context;
        this.protocolData = data.protocolData;
    }
    return Block;
}());
exports.Block = Block;
