import {block} from './block.js';


export class blockchain{
    constructor() {
        this.chain = [block.intialBlock];
        this.difficulty = 3;
    }
    get(){
        return this.chain;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(data){
        this.chain.push(this.generateNextBlock(data));                
    }

    calculateHash(blockindex, previousHash, data, timestamp){
        return CryptoJS.SHA256(blockindex + previousHash + data + timestamp);
    }

    isValidHashDifficulty(hash) {
        for (var i = 0; i < hash.length; i++) {
          if (hash[i] !== "0") {
            break;
          }
        }
        return i >= this.difficulty;
      }
    generateNextBlock(data){
        const previousBlock = this.getLastBlock();
        var blockindex = previousBlock.blockindex+1;
        var previousHash = previousBlock.hash;
        var timestamp = Date.now().toString();
        var hash = this.calculateHash(blockindex, previousHash, data, timestamp).toString();
        var nonce = 0;
        while (!this.isValidHashDifficulty(hash)) {
             nonce = nonce +1;
             timestamp = Date.now().toString();
             hash = this.calculateHash(blockindex, previousHash, data, timestamp).toString();
        }
        return new block(blockindex, data, previousHash, hash, timestamp, nonce);
    }    
    

}



