"use strict";
cc._RF.push(module, '1d85fVXUD1PlbfJoJgn0Gwr', 'game_1');
// Script/game_1.js

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
    bg1: cc.Node,
    bg2: cc.Node,
    speed: 0,
    timer: 0,
    jellyfishTimer: 0,
    groundTimer: 0,
    heartTimer: 0,
    score: 0,
    scoreLabel: cc.Label,
    bgm: cc.AudioClip,
    bgmID: null,
    end: cc.Node,
    endLabel: cc.Label,
    jellyfishesPrefab: {
      "default": null,
      type: cc.Prefab
    },
    groundPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // playerPrefab: {
    //     default: null,
    //     type: cc.Prefab,
    // },
    heartPrefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var end = cc.find("Canvas/Main Camera/end");
    end.active = false;
    this.triggerY = this.bg1.height;
    this.bgmID = cc.audioEngine.play(this.bgm, true, 2);
  },
  start: function start() {},
  NewJellyfish: function NewJellyfish() {
    var jellyfish = cc.instantiate(this.jellyfishesPrefab);
    jellyfish.x = this.node.width / 2;
    var min = -this.node.height / 2;
    var max = this.node.height / 2;
    var y = Math.floor(Math.random() * (max - min) + min);
    jellyfish.setPosition(new cc.v2(jellyfish.x, y));
    this.node.addChild(jellyfish);
  },
  NewGround: function NewGround() {
    var ground = cc.instantiate(this.groundPrefab);
    ground.y = -this.node.height / 2;
    var min = -this.node.width / 2;
    var max = this.node.width / 2;
    var x = Math.floor(Math.random() * (max - min) + min);
    ground.setPosition(new cc.v2(x, ground.y));
    this.node.addChild(ground);
  },
  // NewPlayer() {
  //     let player = cc.instantiate(this.playerPrefab);
  //     player.setPosition(new cc.v2(0, 300));
  //     this.node.addChild(player);
  // },
  NewHeart: function NewHeart() {
    var heart = cc.instantiate(this.heartPrefab);
    var min = -this.node.width / 2;
    var max = this.node.width / 2;
    var y = Math.floor(Math.random() * (max - min) + min);
    var x = Math.floor(Math.random() * (max - min) + min);
    heart.setPosition(new cc.v2(x, y));
    this.node.addChild(heart);
  },
  update: function update(dt) {
    this.timer += dt;
    this.score += 1;
    this.scoreLabel.string = this.score;
    this.jellyfishTimer += dt;
    this.groundTimer += dt;
    this.heartTimer += dt;

    if (this.heartTimer >= 1) {
      this.heartTimer = 0;
      this.NewHeart();
    }

    if (this.jellyfishTimer >= 1) {
      this.jellyfishTimer = 0;
      this.NewJellyfish();
    }

    ;

    if (this.groundTimer >= 3) {
      this.groundTimer = 0;
      this.NewGround();
    }

    ;

    if (this.speed <= 5000) {
      this.speed = 10 * this.timer + 400;
    }

    this.bg1.y += dt * this.speed;
    this.bg2.y += dt * this.speed;

    if (this.bg1.y >= this.triggerY) {
      this.bg1.y = this.bg2.y - this.bg1.height;
    } else if (this.bg2.y >= this.triggerY) {
      this.bg2.y = this.bg1.y - this.bg1.height;
    }

    ;
    var player = cc.find("Canvas/Main Camera/player");
    var playerJs = cc.find("Canvas/Main Camera/player").getComponent("player");

    if (this.score > 2000) {
      this.endLabel.string = "你真TM的流掰";
      this.end.active = true;
      cc.director.pause();
    }

    if (player.y < -this.node.height / 2 || playerJs.life <= 0) {
      cc.director.pause();
      playerJs.value_left = 0;
      playerJs.value_right = 0;
      this.end.active = true;
    }
  }
});

cc._RF.pop();