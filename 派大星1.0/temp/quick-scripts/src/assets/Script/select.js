"use strict";
cc._RF.push(module, '9e9a7WCaK5CEJSFFG9B+0x6', 'select');
// Script/select.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  select_1: function select_1() {
    cc.director.loadScene("game_1");
  },
  select_2: function select_2() {
    cc.director.loadScene("game_2");
  },
  back: function back() {
    cc.director.loadScene("home");
  } // update (dt) {},

});

cc._RF.pop();