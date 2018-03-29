/**
 * Block value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export declare class Block {
    /**
     * Hash of the block.
     */
    hash: string;
    /**
     * Chain id of the block.
     */
    chainId: string;
    /**
     * Hashes of the operations contained in the block.
     */
    operations: string[];
    /**
     * Protocol name.
     */
    protocol: string;
    /**
     * Block level.
     */
    level: number;
    /**
     * Protocol number.
     */
    proto: number;
    /**
     * Predecessor block hash.
     */
    predecessor: string;
    /**
     * Timestamp of the block.
     */
    timestamp: string;
    /**
     * Operations hash.
     */
    operationsHash: string;
    /**
     * Fitness of the block.
     */
    fitness: number[];
    /**
     * Context of the block.
     */
    context: string;
    /**
     * Protocol data.
     */
    protocolData: string;
    /**
     * Create a new instance.
     *
     * @param data Data object
     */
    constructor(data: {
        hash: string;
        chainId: string;
        operations: any[];
        protocol: string;
        level: number;
        proto: number;
        predecessor: string;
        timestamp: string;
        operationsHash: string;
        fitness: number[];
        context: string;
        protocolData: string;
    });
}
