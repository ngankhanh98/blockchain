import { block } from './block.js';

$(function () {
    
    let data = `Welcome to demo blockchain!`;
    let previousHash = `0`;
    let hash = `000f0a9cbf6db1e982d74ce707a5dfd86bf4890753ccd85cfdb75730ccd3fe19`;
    let timestamp = Date.now();
    let blockindex = 0 ;
    let nounce = 604;
    let raw_block = new block(blockindex, data, previousHash, hash, timestamp, nounce);
    let html = `<div class="block" id="block-${_block.blockindex}">
    <div class="input-group data-input">
      <div class="input-group-prepend">
        <span class="input-group-text" id="data">DATA</span>
      </div>
      <input readonly class="form-control" type="text" name="data" aria-describedby="data"
        value="${_block.data}" />
    </div>
    <div class="previousHash">
      <span>PREVIOUS HASH</span>
      <span class="hash" id="previousValue">${_block.previousHash}</span>
    </div>
    <div class="currentHash">
      <span>HASH</span>
      <div id="currentValue">
        <span class="hash">${_block.hash}
        </span>
      </div>
    </div>
    <div class="footter">
      <div class="block-info">
        <div class="block-tag">BLOCK #${_block.blockindex}</div>
        <div class="timestamp">on ${Date(_block.timestamp).toString()}</div>
      </div>
      <div class="block-function">
        
        <div class="nounce">
          <span class="nounceValue">${_block.nounce}</span>
        </div>
      </div>
    </div>
  </div>`;

    // load genesis block
    $(".new-block button").click(function () {
      console.log(_block);
        $(".blockchain").append(`${html}`);
    })
    
});