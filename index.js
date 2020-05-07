import { block } from "./block.js";
import { blockchain } from "./blockchain.js";

$(function () {
/**
 * Load first block
 */
  let _blockchain = new blockchain();
  var lastBlock = _blockchain.getLastBlock();
    let html = `<div class="block" id="block-${lastBlock.blockindex}">
    <div class="input-group data-input">
      <div class="input-group-prepend">
        <span class="input-group-text" id="data">DATA</span>
      </div>
      <input readonly class="form-control" type="text" name="data" aria-describedby="data"
        value="${lastBlock.data}" />
    </div>
    <div class="previousHash">
      <span>PREVIOUS HASH</span>
      <span class="hash" id="previousValue">${lastBlock.previousHash}</span>
    </div>
    <div class="currentHash">
      <span>HASH</span>
      <div id="currentValue">
        <span class="hash">${lastBlock.hash}
        </span>
      </div>
    </div>
    <div class="footter">
      <div class="block-info">
        <div class="block-tag">BLOCK #${lastBlock.blockindex}</div>
        <div class="timestamp">on ${Date(lastBlock.timestamp).toString()}</div>
      </div>
      <div class="block-function">
        
        <div class="nounce">
          <span class="nounceValue">${lastBlock.nounce}</span>
        </div>
      </div>
    </div>
  </div>`;
  $(".blockchain").append(`${html}`);

  /**
   * Click "Add new block" button
   */
  $(".new-block button").click(function () {
    console.log(_blockchain);
    var data = $(".new-block input").val(); //get new-block data
    console.log(`typeofdata: ${typeof data}`);
    _blockchain.addBlock(data); // add new block
    var lastBlock = _blockchain.getLastBlock();
    let html = `<div class="block" id="block-${lastBlock.blockindex}">
    <div class="input-group data-input">
      <div class="input-group-prepend">
        <span class="input-group-text" id="data">DATA</span>
      </div>
      <input readonly class="form-control" type="text" name="data" aria-describedby="data"
        value="${lastBlock.data}" />
    </div>
    <div class="previousHash">
      <span>PREVIOUS HASH</span>
      <span class="hash" id="previousValue">${lastBlock.previousHash}</span>
    </div>
    <div class="currentHash">
      <span>HASH</span>
      <div id="currentValue">
        <span class="hash">${lastBlock.hash}
        </span>
      </div>
    </div>
    <div class="footter">
      <div class="block-info">
        <div class="block-tag">BLOCK #${lastBlock.blockindex}</div>
        <div class="timestamp">on ${Date(lastBlock.timestamp).toString()}</div>
      </div>
      <div class="block-function">
        
        <div class="nounce">
          <span class="nounceValue">${lastBlock.nounce}</span>
        </div>
      </div>
    </div>
  </div>`;

    $(".blockchain").append(`${html}`);
    $(".new-block input").val("");
  });
});
