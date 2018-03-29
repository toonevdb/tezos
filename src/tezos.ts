import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { Block } from "./vo/block";
import { Contract } from "./vo/contract";
import { Operation } from "./vo/operation";

/**
 * Tezos rpc client.
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
export class Tezos {
    /**
     * URL of the rpc node.
     */
    private nodeUrl = "https://tezrpc.me/zeronet";

    /**
     * Axios http client.
     */
    private client: AxiosInstance;

    /**
     * Create a new instance.
     *
     * @param nodeUrl Url of the rpc node
     */
    public constructor(nodeUrl?: string) {
        if (nodeUrl) {
            this.nodeUrl = nodeUrl;
        }

        this.client = axios.create({
            baseURL: this.nodeUrl,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    /**
     * Fetches the HEAD~n block.
     *
     * Use 0 to fetch HEAD.
     *
     * @param n Delta from HEAD to fetch
     */
    public getBlock(n: number): Promise<Block> {
        return this.query(`/blocks/head~${n}`).then((response) => {
            const getHash = (op: any) => {
                return op.hash;
            };

            return new Block({
                chainId: response.data.chain_id,
                context: response.data.context,
                fitness: response.data.fitness,
                hash: response.data.hash,
                level: response.data.level,
                operations: response.data.operations.map(getHash),
                operationsHash: response.data.operationsHash,
                predecessor: response.data.predecessor,
                proto: response.data.proto,
                protocol: response.data.protocol,
                protocolData: response.data.protocolData,
                timestamp: response.data.timestamp,
            });
        });
    }

    /**
     * Fetch the contract associated with the address.
     *
     * @param address Contract address
     */
    public getContract(address: string): Promise<Contract> {
        return this.query(`/blocks/head/proto/context/contracts/${address}`)
            .then((response) => {
                return new Contract({
                    balance: response.data.balance,
                    counter: response.data.counter,
                    delegatable: response.data.delegate.setable,
                    delegate: response.data.delegate.value,
                    manager: response.data.manager,
                    spendable: response.data.spendable,
                });
            });
    }

    /**
     * Get the operations contained in the block.
     *
     * @param blockId Block hash or identifier
     */
    public getOperations(blockId: string): Promise<Operation[]> {
        return this.query(`/blocks/${blockId}/proto/operations`)
            .then((response: any) => {
                return response.data[0].map((el: any) => {
                    return new Operation({
                        block: el.block,
                        branch: el.branch,
                        hash: el.hash,
                        kind: el.kind,
                        level: el.level,
                        signature: el.signature,
                        slots: el.slots,
                    });
                });
            });
    }

    /**
     * Query the node.
     *
     * @param url Url to post to
     * @param data Data to send
     */
    private query(url: string, data?: any): AxiosPromise {
        if (!data) {
            data = {};
        }

        return this.client.post(url, data);
    }
}
