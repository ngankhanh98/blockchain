import {blockchain} from './blockchain.js';

function isDifficulty(hash) {
  for (var i = 0; i < hash.length; i++) {
    if (hash[i] !== "0") {
      break;
    }
  }
  return i >= blockchain.difficulty;
}

export class block {
  constructor(blockindex, data, previousHash, hash, timestamp, nonce) {
    this.blockindex = blockindex;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = hash;
    this.timestamp = timestamp;
    this.nonce = nonce;
  }

  
 
  static get intialBlock() {
    var blockindex = 0;
    var data = "Welcome to blockchain demo!";
    var previousHash = "0";
    var timestamp = Date.now().toString();
    var hash = CryptoJS.SHA256(blockindex + previousHash + data + timestamp).toString();
    var nonce = 0;
    while (!isDifficulty(hash)) {
      nonce = nonce +1;
      timestamp = Date.now().toString();
      hash = CryptoJS.SHA256(blockindex + previousHash + data + timestamp).toString();
      console.log(`${nonce} + ${hash}`);
    }
    return new block(blockindex, data, previousHash, hash, timestamp, nonce);
  }
}
