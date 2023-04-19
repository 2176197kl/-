"use strict";
cc._RF.push(module, 'cc517a7X65GZZCoZXzsJRfj', 'player');
// Script/player.js

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
    // 主角跳跃高度
    jumpHeight: 200,
    // 主角跳跃持续时间
    jumpDuration: 0.3,
    pace: 10,
    fruitLabel: cc.Label,
    jumpSound: cc.AudioClip,
    jumpSkill: 1,
    life: 3,
    lifeLabel: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true; //按压功能

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (key) {
      if (key.keyCode == cc.macro.KEY.up) {
        if (this.jumpSkill > 0) {
          if (Global.dianjiSound) {
            cc.audioEngine.play(cc.find("Canvas/Main Camera/pause").getComponent("game_menu").sound, false, 1);
          }

          this.node.runAction(this.setJumpAction());
          this.jumpSkill = 0;
        }
      }

      ;

      if (key.keyCode == cc.macro.KEY.left) {
        this.value_left = 1;
      }

      ;

      if (key.keyCode == cc.macro.KEY.right) {
        this.value_right = 1;
      }

      ;
    }, this); //抬起功能

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (key) {
      if (key.keyCode == cc.macro.KEY.left) {
        this.value_left = 0;
      }

      ;

      if (key.keyCode == cc.macro.KEY.right) {
        this.value_right = 0;
      }

      ;
    }, this);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "jellyfish") {
      other.node.destroy();
      this.life--;
      self.node.runAction(new cc.blink(0.5, 3)); //cc.find("Canvas/Main Camera").getComponent("game_1").timer = 0;

      this.lifeLabel.string = "X " + this.life;
    }

    ;

    if (other.node.group == "heart") {
      this.life++;
      this.lifeLabel.string = "X " + this.life;
      other.node.destroy();
    }

    ;

    if (other.node.group == "home") {
      this.jumpSkill = 1;
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (this.value_left == 1) {
      this.node.runAction(this.leftMove());
      this.getComponent(cc.Animation).play("派大星左走");
    } else {
      this.getComponent(cc.Animation).stop("派大星左走");
    }

    if (this.value_right == 1) {
      this.node.runAction(this.rightMove());
      this.getComponent(cc.Animation).play("派大星右走");
    } else {
      this.getComponent(cc.Animation).stop("派大星右走");
    }
  },
  rightMove: function rightMove() {
    var rMove = cc.moveBy(0.02, cc.v2(this.pace, 0));
    return this.node.runAction(rMove);
  },
  leftMove: function leftMove() {
    var lMove = cc.moveBy(0.02, cc.v2(-this.pace, 0));
    return this.node.runAction(lMove);
  },
  setJumpAction: function setJumpAction() {
    // 跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // 下落
    // let jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    // // 单次上升下落
    // return cc.sequence(jumpUp, jumpDown);

    return this.node.runAction(jumpUp);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, function (key) {
      if (key.keyCode == cc.macro.KEY.up) {
        if (this.jumpSkill > 0) {
          if (Global.dianjiSound) {
            cc.audioEngine.play(cc.find("Canvas/Main Camera/pause").getComponent("game_menu").sound, false, 1);
          }

          this.node.runAction(this.setJumpAction());
          this.jumpSkill = 0;
        }
      }

      ;

      if (key.keyCode == cc.macro.KEY.left) {
        this.value_left = 1;
      }

      ;

      if (key.keyCode == cc.macro.KEY.right) {
        this.value_right = 1;
      }

      ;
    }, this);
  }
});

cc._RF.pop();