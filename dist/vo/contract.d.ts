/**
 * Contract value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export declare class Contract {
    /**
     * Contract address of this contract's manager.
     */
    manager: string;
    /**
     * Contract address of this contract's delegate.
     */
    delegate: string;
    /**
     * Balance of this contract.
     */
    balance: number;
    /**
     * Transaction counter of this contract.
     */
    counter: number;
    /**
     * Flag indicating if this contract is spendable.
     */
    spendable: boolean;
    /**
     * Flag indicating if this contract's delegate is changeable.
     */
    delegatable: boolean;
    /**
     * Create a new instance.
     *
     * @param data Data object
     */
    constructor(data: {
        manager: string;
        delegate: string;
        balance: number;
        counter: number;
        spendable: boolean;
        delegatable: boolean;
    });
}
