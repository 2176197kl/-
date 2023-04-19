"use strict";
cc._RF.push(module, '86e77H0rZlCAKjJ8T+jKbkM', 'game_menu');
// Script/game_menu.js

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
    tanchuang: cc.Node,
    OnMusic: cc.Node,
    OffMusic: cc.Node,
    sound: cc.AudioClip,
    go: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  gameStop: function gameStop() {
    cc.director.pause();
    this.tanchuang.active = true;
    this.node.active = false;

    if (Global.dianjiSound) {
      cc.audioEngine.play(this.sound, false, 1);
    }
  },
  gameMute: function gameMute() {
    cc.audioEngine.pause(cc.find("Canvas/Main Camera").getComponent("game_1").bgmID);
    this.OffMusic.active = true;
    this.OnMusic.active = false;

    if (Global.dianjiSound) {
      cc.audioEngine.play(this.sound, false, 1);
    }
  },
  gameMusic: function gameMusic() {
    cc.audioEngine.resume(cc.find("Canvas/Main Camera").getComponent("game_1").bgmID);
    this.OnMusic.active = true;
    this.OffMusic.active = false;

    if (Global.dianjiSound) {
      cc.audioEngine.play(this.sound, false, 1);
    }
  },
  gameResume: function gameResume() {
    this.tanchuang.active = false;
    this.node.active = true;
    cc.director.resume();

    if (Global.dianjiSound) {
      cc.audioEngine.play(this.sound, false, 1);
    }
  },
  gameBack: function gameBack() {
    cc.director.loadScene("select");

    if (Global.dianjiSound) {
      cc.audioEngine.play(this.sound, false, 1);
    }
  } // update (dt) {},

});

cc._RF.pop();