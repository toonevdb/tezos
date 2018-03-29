"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contract value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
var Contract = /** @class */ (function () {
    /**
     * Create a new instance.
     *
     * @param data Data object
     */
    function Contract(data) {
        this.manager = data.manager;
        this.delegate = data.delegate;
        this.balance = data.balance;
        this.counter = data.counter;
        this.spendable = data.spendable;
        this.delegatable = data.delegatable;
    }
    return Contract;
}());
exports.Contract = Contract;
