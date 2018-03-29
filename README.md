# Tezos typescript library

Client for querying the Tezos RPC node.

Still very basic, only has three calls for now:

* getBlock
* getContract
* getOperations

But this should be sufficient to monitor a contract's operations :-).  
API Documentation can be found in the [docs](docs) folder.

This library has some tests querying the current zeronet.  
Once mainnet releases (or zeronet updates) I will update the values.

For a more complete library, you might want to checkout the [eztz.js](https://github.com/stephenandrews/eztz) library.