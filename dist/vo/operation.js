"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Operation value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
var Operation = /** @class */ (function () {
    function Operation(data) {
        this.hash = data.hash;
        this.branch = data.branch;
        this.kind = data.kind;
        this.block = data.block;
        this.level = data.level;
        this.slots = data.slots;
        this.signature = data.signature;
    }
    return Operation;
}());
exports.Operation = Operation;
