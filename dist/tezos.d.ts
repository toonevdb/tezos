import { Block } from "./vo/block";
import { Contract } from "./vo/contract";
import { Operation } from "./vo/operation";
/**
 * Tezos rpc client.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export declare class Tezos {
    /**
     * URL of the rpc node.
     */
    private nodeUrl;
    /**
     * Axios http client.
     */
    private client;
    /**
     * Create a new instance.
     *
     * @param nodeUrl Url of the rpc node
     */
    constructor(nodeUrl?: string);
    /**
     * Fetches the HEAD~n block.
     *
     * Use 0 to fetch HEAD.
     *
     * @param n Delta from HEAD to fetch
     */
    getBlock(n: number): Promise<Block>;
    /**
     * Fetch the contract associated with the address.
     *
     * @param address Contract address
     */
    getContract(address: string): Promise<Contract>;
    /**
     * Get the operations contained in the block.
     *
     * @param blockId Block hash or identifier
     */
    getOperations(blockId: string): Promise<Operation[]>;
    /**
     * Query the node.
     *
     * @param url Url to post to
     * @param data Data to send
     */
    private query(url, data?);
}
