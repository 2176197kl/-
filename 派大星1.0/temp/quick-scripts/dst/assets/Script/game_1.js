
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXzEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZzEiLCJOb2RlIiwiYmcyIiwic3BlZWQiLCJ0aW1lciIsImplbGx5ZmlzaFRpbWVyIiwiZ3JvdW5kVGltZXIiLCJoZWFydFRpbWVyIiwic2NvcmUiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJiZ20iLCJBdWRpb0NsaXAiLCJiZ21JRCIsImVuZCIsImVuZExhYmVsIiwiamVsbHlmaXNoZXNQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwiZ3JvdW5kUHJlZmFiIiwiaGVhcnRQcmVmYWIiLCJvbkxvYWQiLCJmaW5kIiwiYWN0aXZlIiwidHJpZ2dlclkiLCJoZWlnaHQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJzdGFydCIsIk5ld0plbGx5ZmlzaCIsImplbGx5ZmlzaCIsImluc3RhbnRpYXRlIiwieCIsIm5vZGUiLCJ3aWR0aCIsIm1pbiIsIm1heCIsInkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRQb3NpdGlvbiIsInYyIiwiYWRkQ2hpbGQiLCJOZXdHcm91bmQiLCJncm91bmQiLCJOZXdIZWFydCIsImhlYXJ0IiwidXBkYXRlIiwiZHQiLCJzdHJpbmciLCJwbGF5ZXIiLCJwbGF5ZXJKcyIsImdldENvbXBvbmVudCIsImRpcmVjdG9yIiwicGF1c2UiLCJsaWZlIiwidmFsdWVfbGVmdCIsInZhbHVlX3JpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsR0FBRyxFQUFFSixFQUFFLENBQUNLLElBREE7QUFFUkMsSUFBQUEsR0FBRyxFQUFFTixFQUFFLENBQUNLLElBRkE7QUFHUkUsSUFBQUEsS0FB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QUFBO0FBRUQsUUFBSTBCLE1BQU0sR0FBR3ZELEVBQUUsQ0FBQzBCLElBQUgsQ0FBUSwyQkFBUixDQUFiO0FBQ0EsUUFBSThCLFFBQVEsR0FBR3hELEVBQUUsQ0FBQzBCLElBQUgsQ0FBUSwyQkFBUixFQUFxQytCLFlBQXJDLENBQWtELFFBQWxELENBQWY7O0FBQ0EsUUFBSSxLQUFLN0MsS0FBTCxHQUFhLElBQWpCLEVBQXVCO0FBQ25CLFdBQUtPLFFBQUwsQ0FBY21DLE1BQWQsR0FBdUIsU0FBdkI7QUFDQSxXQUFLcEMsR0FBTCxDQUFTUyxNQUFULEdBQWtCLElBQWxCO0FBQ0EzQixNQUFBQSxFQUFFLENBQUMwRCxRQUFILENBQVlDLEtBQVo7QUFDSDs7QUFDRCxRQUFJSixNQUFNLENBQUNkLENBQVAsR0FBVyxDQUFDLEtBQUtKLElBQUwsQ0FBVVIsTUFBWCxHQUFvQixDQUEvQixJQUFvQzJCLFFBQVEsQ0FBQ0ksSUFBVCxJQUFpQixDQUF6RCxFQUE0RDtBQUN4RDVELE1BQUFBLEVBQUUsQ0FBQzBELFFBQUgsQ0FBWUMsS0FBWjtBQUNBSCxNQUFBQSxRQUFRLENBQUNLLFVBQVQsR0FBc0IsQ0FBdEI7QUFDQUwsTUFBQUEsUUFBUSxDQUFDTSxXQUFULEdBQXVCLENBQXZCO0FBQ0EsV0FBSzVDLEdBQUwsQ0FBU1MsTUFBVCxHQUFrQixJQUFsQjtBQUNIO0FBQ0o7QUE3SEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJnMTogY2MuTm9kZSxcclxuICAgICAgICBiZzI6IGNjLk5vZGUsXHJcbiAgICAgICAgc3BlZWQ6IDAsXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgamVsbHlmaXNoVGltZXI6IDAsXHJcbiAgICAgICAgZ3JvdW5kVGltZXI6IDAsXHJcbiAgICAgICAgaGVhcnRUaW1lcjogMCxcclxuICAgICAgICBzY29yZTogMCxcclxuICAgICAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBiZ206IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBiZ21JRDogbnVsbCxcclxuICAgICAgICBlbmQ6IGNjLk5vZGUsXHJcbiAgICAgICAgZW5kTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGplbGx5ZmlzaGVzUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyb3VuZFByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBwbGF5ZXJQcmVmYWI6IHtcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgaGVhcnRQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgZW5kID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9lbmRcIik7XHJcbiAgICAgICAgZW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclkgPSB0aGlzLmJnMS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iZ21JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ20sIHRydWUsIDIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgTmV3SmVsbHlmaXNoKCkge1xyXG4gICAgICAgIGxldCBqZWxseWZpc2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmplbGx5ZmlzaGVzUHJlZmFiKTtcclxuICAgICAgICBqZWxseWZpc2gueCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdmFyIG1pbiA9IC10aGlzLm5vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgbWF4ID0gdGhpcy5ub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICAgICAgamVsbHlmaXNoLnNldFBvc2l0aW9uKG5ldyBjYy52MihqZWxseWZpc2gueCwgeSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChqZWxseWZpc2gpO1xyXG4gICAgfSxcclxuXHJcbiAgICBOZXdHcm91bmQoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kUHJlZmFiKTtcclxuICAgICAgICBncm91bmQueSA9IC10aGlzLm5vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgbWluID0gLXRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdmFyIG1heCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICAgICAgZ3JvdW5kLnNldFBvc2l0aW9uKG5ldyBjYy52Mih4LCBncm91bmQueSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChncm91bmQpO1xyXG4gICAgfSxcclxuICAgIC8vIE5ld1BsYXllcigpIHtcclxuICAgIC8vICAgICBsZXQgcGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpO1xyXG4gICAgLy8gICAgIHBsYXllci5zZXRQb3NpdGlvbihuZXcgY2MudjIoMCwgMzAwKSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBsYXllcik7XHJcbiAgICAvLyB9LFxyXG4gICAgTmV3SGVhcnQoKSB7XHJcbiAgICAgICAgbGV0IGhlYXJ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5oZWFydFByZWZhYik7XHJcbiAgICAgICAgdmFyIG1pbiA9IC10aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHZhciBtYXggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgICAgIGhlYXJ0LnNldFBvc2l0aW9uKG5ldyBjYy52Mih4LCB5KSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGhlYXJ0KTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5qZWxseWZpc2hUaW1lciArPSBkdDtcclxuICAgICAgICB0aGlzLmdyb3VuZFRpbWVyICs9IGR0O1xyXG4gICAgICAgIHRoaXMuaGVhcnRUaW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5oZWFydFRpbWVyID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFydFRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5OZXdIZWFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5qZWxseWZpc2hUaW1lciA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuamVsbHlmaXNoVGltZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5ld0plbGx5ZmlzaCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kVGltZXIgPj0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZFRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5OZXdHcm91bmQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkIDw9IDUwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDEwICogdGhpcy50aW1lciArIDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iZzEueSArPSBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5iZzIueSArPSBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYmcxLnkgPj0gdGhpcy50cmlnZ2VyWSkge1xyXG4gICAgICAgICAgICB0aGlzLmJnMS55ID0gdGhpcy5iZzIueSAtIHRoaXMuYmcxLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iZzIueSA+PSB0aGlzLnRyaWdnZXJZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmcyLnkgPSB0aGlzLmJnMS55IC0gdGhpcy5iZzEuaGVpZ2h0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL3BsYXllclwiKTtcclxuICAgICAgICBsZXQgcGxheWVySnMgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL3BsYXllclwiKS5nZXRDb21wb25lbnQoXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiAyMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kTGFiZWwuc3RyaW5nID0gXCLkvaDnnJ9UTeeahOa1geaOsFwiO1xyXG4gICAgICAgICAgICB0aGlzLmVuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGxheWVyLnkgPCAtdGhpcy5ub2RlLmhlaWdodCAvIDIgfHwgcGxheWVySnMubGlmZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHBsYXllckpzLnZhbHVlX2xlZnQgPSAwO1xyXG4gICAgICAgICAgICBwbGF5ZXJKcy52YWx1ZV9yaWdodCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG59KTtcclxuIl19