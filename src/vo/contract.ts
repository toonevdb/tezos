/**
 * Contract value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export class Contract {
    /**
     * Contract address of this contract's manager.
     */
    public manager: string;

    /**
     * Contract address of this contract's delegate.
     */
    public delegate: string;

    /**
     * Balance of this contract.
     */
    public balance: number;

    /**
     * Transaction counter of this contract.
     */
    public counter: number;

    /**
     * Flag indicating if this contract is spendable.
     */
    public spendable: boolean;

    /**
     * Flag indicating if this contract's delegate is changeable.
     */
    public delegatable: boolean;

    /**
     * Create a new instance.
     *
     * @param data Data object
     */
    public constructor(
        data: {
            manager: string,
            delegate: string,
            balance: number,
            counter: number,
            spendable: boolean,
            delegatable: boolean,
        },
    ) {
        this.manager = data.manager;
        this.delegate = data.delegate;
        this.balance = data.balance;
        this.counter = data.counter;
        this.spendable = data.spendable;
        this.delegatable = data.delegatable;
    }
}
