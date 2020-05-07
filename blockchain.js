import {block} from './block.js';

class blockchain{
    constructor() {
        this.chain = null;
        this.difficulty = 3;
    }
    get(){
        return this.blockchain;
    }

    lastestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }

    addBlock(block){
        this.chain.push(block);        
    }
    
}



