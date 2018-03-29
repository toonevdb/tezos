/**
 * Operation value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export class Operation {
    /**
     * Hash of this operation.
     */
    public hash: string;

    /**
     * Branch of this operation.
     */
    public branch: string;

    /**
     * Action of this operation.
     */
    public kind: string;

    /**
     * Block hash of the operation.
     */
    public block: string;

    /**
     * Block level of this operation.
     */
    public level: number;

    /**
     * Block slot indices.
     */
    public slots: number[];

    /**
     * Signature of this operation.
     */
    public signature: string;

    public constructor(
        data: {
            hash: string,
            branch: string,
            kind: string,
            block: string,
            level: number,
            slots: number[],
            signature: string,
        },
    ) {
        this.hash = data.hash;
        this.branch = data.branch;
        this.kind = data.kind;
        this.block = data.block;
        this.level = data.level;
        this.slots = data.slots;
        this.signature = data.signature;
    }
}
