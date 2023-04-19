"use strict";
cc._RF.push(module, '6be916SbzxFT43bZKJ5zcEe', 'menu');
// Script/menu.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    rule: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  showRULE: function showRULE() {
    this.rule.active = true;
  },
  disshowRULE: function disshowRULE() {
    this.rule.active = false;
  },
  playOn: function playOn() {
    cc.director.loadScene("select");
  },
  update: function update(dt) {// let playerJs = cc.find("Canvas/Main Camera").getComponent("player");
    // playerJs.value_left = 0;
    // playerJs.value_right = 0;
  }
});

cc._RF.pop();