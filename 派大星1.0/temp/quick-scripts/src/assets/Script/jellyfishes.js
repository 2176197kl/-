"use strict";
cc._RF.push(module, 'fd404vQFf1Ms5L8DrPxFc62', 'jellyfishes');
// Script/jellyfishes.js

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
    speed: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getPhysicsManager().enabled = true;
    var bgScript = cc.find("Canvas/Main Camera").getComponent("game_1");

    if (bgScript) {
      this.speed = bgScript.speed * 1;
    } else {
      console.log(bgScript);
    }
  },
  start: function start() {},
  update: function update(dt) {
    this.node.x -= this.speed * dt;

    if (this.node.x <= -600) {
      this.node.destroy();
    }
  }
});

cc._RF.pop();