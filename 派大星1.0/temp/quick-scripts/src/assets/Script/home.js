"use strict";
cc._RF.push(module, '29a551Xd1VHdKqaIbMHM0E+', 'home');
// Script/home.js

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
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getPhysicsManager().enabled = true;
  },
  // onCollisionEnter: function (other, self) {
  //     let playerJs = cc.find("Canvas/Main Camera/player").getComponent("player");
  //     if (other.node.group == "player") {
  //         playerJs.jumpSkill = 1;
  //     };
  // },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();