/**
 * Operation value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export declare class Operation {
    /**
     * Hash of this operation.
     */
    hash: string;
    /**
     * Branch of this operation.
     */
    branch: string;
    /**
     * Action of this operation.
     */
    kind: string;
    /**
     * Block hash of the operation.
     */
    block: string;
    /**
     * Block level of this operation.
     */
    level: number;
    /**
     * Block slot indices.
     */
    slots: number[];
    /**
     * Signature of this operation.
     */
    signature: string;
    constructor(data: {
        hash: string;
        branch: string;
        kind: string;
        block: string;
        level: number;
        slots: number[];
        signature: string;
    });
}
