/**
 * Block value object.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export class Block {
    /**
     * Hash of the block.
     */
    public hash: string;

    /**
     * Chain id of the block.
     */
    public chainId: string;

    /**
     * Hashes of the operations contained in the block.
     */
    public operations: string[];

    /**
     * Protocol name.
     */
    public protocol: string;

    /**
     * Block level.
     */
    public level: number;

    /**
     * Protocol number.
     */
    public proto: number;

    /**
     * Predecessor block hash.
     */
    public predecessor: string;

    /**
     * Timestamp of the block.
     */
    public timestamp: string;

    /**
     * Operations hash.
     */
    public operationsHash: string;

    /**
     * Fitness of the block.
     */
    public fitness: number[];

    /**
     * Context of the block.
     */
    public context: string;

    /**
     * Protocol data.
     */
    public protocolData: string;

    /**
     * Create a new instance.
     *
     * @param data Data object
     */
    public constructor(
        data: {
            hash: string,
            chainId: string,
            operations: any[],
            protocol: string,
            level: number,
            proto: number,
            predecessor: string,
            timestamp: string,
            operationsHash: string,
            fitness: number[],
            context: string,
            protocolData: string,
        },
    ) {
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
}
