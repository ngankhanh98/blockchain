
export class block {
  constructor(blockindex, data, previousHash, hash, timestamp, nounce) {
    this.blockindex = blockindex;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = hash;
    this.timestamp = timestamp;
    this.nounce = nounce;
  }
  static get intialBlock(){
    let blockindex = 0;
    let data = "Welcome to blockchain demo!";
    let previousHash = "0";
    let timestamp = Date.now();
    let nounce = 0;
    let hash = CryptoJS.SHA256(previousHash + data + timestamp);
    return new block(blockindex, data, previousHash, hash, timestamp, nouce);
  }
}
