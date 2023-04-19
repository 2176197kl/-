
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/data');
require('./assets/Script/game_1');
require('./assets/Script/game_menu');
require('./assets/Script/ground');
require('./assets/Script/heart');
require('./assets/Script/home');
require('./assets/Script/jellyfishes');
require('./assets/Script/menu');
require('./assets/Script/player');
require('./assets/Script/select');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/data.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ea0GsuWJDCqLCvxVA54dx', 'data');
// Script/data.js

"use strict";

window.Global = {
  dianjiSound: true
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkYXRhLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkdsb2JhbCIsImRpYW5qaVNvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7QUFDWkMsRUFBQUEsV0FBVyxFQUFFO0FBREQsQ0FBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5HbG9iYWwgPSB7XHJcbiAgICBkaWFuamlTb3VuZDogdHJ1ZSxcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/select.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZWxlY3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInNlbGVjdF8xIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzZWxlY3RfMiIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdHLENBRVAsQ0FiSTtBQWNMQyxFQUFBQSxRQWRLLHNCQWNNO0FBQ1BMLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFFBQXRCO0FBQ0gsR0FoQkk7QUFrQkxDLEVBQUFBLFFBbEJLLHNCQWtCTTtBQUNQUixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixRQUF0QjtBQUNILEdBcEJJO0FBc0JMRSxFQUFBQSxJQXRCSyxrQkFzQkU7QUFDSFQsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSCxHQXhCSSxDQXlCTDs7QUF6QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBzZWxlY3RfMSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXzFcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlbGVjdF8yKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVfMlwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJob21lXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game_menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lX21lbnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0YW5jaHVhbmciLCJOb2RlIiwiT25NdXNpYyIsIk9mZk11c2ljIiwic291bmQiLCJBdWRpb0NsaXAiLCJnbyIsIm9uTG9hZCIsInN0YXJ0IiwiZ2FtZVN0b3AiLCJkaXJlY3RvciIsInBhdXNlIiwiYWN0aXZlIiwibm9kZSIsIkdsb2JhbCIsImRpYW5qaVNvdW5kIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZ2FtZU11dGUiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiYmdtSUQiLCJnYW1lTXVzaWMiLCJyZXN1bWUiLCJnYW1lUmVzdW1lIiwiZ2FtZUJhY2siLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETjtBQUVSQyxJQUFBQSxPQUFPLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGSjtBQUdSRSxJQUFBQSxRQUFRLEVBQUVQLEVBQUUsQ0FBQ0ssSUFITDtBQUlSRyxJQUFBQSxLQUFLLEVBQUVSLEVBQUUsQ0FBQ1MsU0FKRjtBQUtSQyxJQUFBQSxFQUFFLEVBQUVWLEVBQUUsQ0FBQ0s7QUFMQyxHQUhQO0FBV0w7QUFFQU0sRUFBQUEsTUFiSyxvQkFhSSxDQUFHLENBYlA7QUFlTEMsRUFBQUEsS0FmSyxtQkFlRyxDQUNQLENBaEJJO0FBaUJMQyxFQUFBQSxRQWpCSyxzQkFpQk07QUFDUGIsSUFBQUEsRUFBRSxDQUFDYyxRQUFILENBQVlDLEtBQVo7QUFDQSxTQUFLWCxTQUFMLENBQWVZLE1BQWYsR0FBd0IsSUFBeEI7QUFDQSxTQUFLQyxJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBbkI7O0FBQ0EsUUFBSUUsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCbkIsTUFBQUEsRUFBRSxDQUFDb0IsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtiLEtBQXpCLEVBQWdDLEtBQWhDLEVBQXVDLENBQXZDO0FBQ0g7QUFDSixHQXhCSTtBQXlCTGMsRUFBQUEsUUF6Qkssc0JBeUJNO0FBQ1B0QixJQUFBQSxFQUFFLENBQUNvQixXQUFILENBQWVMLEtBQWYsQ0FBcUJmLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUSxvQkFBUixFQUE4QkMsWUFBOUIsQ0FBMkMsUUFBM0MsRUFBcURDLEtBQTFFO0FBQ0EsU0FBS2xCLFFBQUwsQ0FBY1MsTUFBZCxHQUF1QixJQUF2QjtBQUNBLFNBQUtWLE9BQUwsQ0FBYVUsTUFBYixHQUFzQixLQUF0Qjs7QUFDQSxRQUFJRSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEJuQixNQUFBQSxFQUFFLENBQUNvQixXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS2IsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUMsQ0FBdkM7QUFDSDtBQUVKLEdBakNJO0FBa0NMa0IsRUFBQUEsU0FsQ0ssdUJBa0NPO0FBQ1IxQixJQUFBQSxFQUFFLENBQUNvQixXQUFILENBQWVPLE1BQWYsQ0FBc0IzQixFQUFFLENBQUN1QixJQUFILENBQVEsb0JBQVIsRUFBOEJDLFlBQTlCLENBQTJDLFFBQTNDLEVBQXFEQyxLQUEzRTtBQUNBLFNBQUtuQixPQUFMLENBQWFVLE1BQWIsR0FBc0IsSUFBdEI7QUFDQSxTQUFLVCxRQUFMLENBQWNTLE1BQWQsR0FBdUIsS0FBdkI7O0FBQ0EsUUFBSUUsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCbkIsTUFBQUEsRUFBRSxDQUFDb0IsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtiLEtBQXpCLEVBQWdDLEtBQWhDLEVBQXVDLENBQXZDO0FBQ0g7QUFDSixHQXpDSTtBQTBDTG9CLEVBQUFBLFVBMUNLLHdCQTBDUTtBQUNULFNBQUt4QixTQUFMLENBQWVZLE1BQWYsR0FBd0IsS0FBeEI7QUFDQSxTQUFLQyxJQUFMLENBQVVELE1BQVYsR0FBbUIsSUFBbkI7QUFDQWhCLElBQUFBLEVBQUUsQ0FBQ2MsUUFBSCxDQUFZYSxNQUFaOztBQUNBLFFBQUlULE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQm5CLE1BQUFBLEVBQUUsQ0FBQ29CLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLYixLQUF6QixFQUFnQyxLQUFoQyxFQUF1QyxDQUF2QztBQUNIO0FBQ0osR0FqREk7QUFrRExxQixFQUFBQSxRQWxESyxzQkFrRE07QUFDUDdCLElBQUFBLEVBQUUsQ0FBQ2MsUUFBSCxDQUFZZ0IsU0FBWixDQUFzQixRQUF0Qjs7QUFDQSxRQUFJWixNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEJuQixNQUFBQSxFQUFFLENBQUNvQixXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS2IsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUMsQ0FBdkM7QUFDSDtBQUVKLEdBeERJLENBeURMOztBQXpESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGFuY2h1YW5nOiBjYy5Ob2RlLFxyXG4gICAgICAgIE9uTXVzaWM6IGNjLk5vZGUsXHJcbiAgICAgICAgT2ZmTXVzaWM6IGNjLk5vZGUsXHJcbiAgICAgICAgc291bmQ6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBnbzogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuICAgIGdhbWVTdG9wKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy50YW5jaHVhbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5kaWFuamlTb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmQsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2FtZU11dGUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoXCJnYW1lXzFcIikuYmdtSUQpO1xyXG4gICAgICAgIHRoaXMuT2ZmTXVzaWMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk9uTXVzaWMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5kaWFuamlTb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmQsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGdhbWVNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoXCJnYW1lXzFcIikuYmdtSUQpO1xyXG4gICAgICAgIHRoaXMuT25NdXNpYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuT2ZmTXVzaWMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5kaWFuamlTb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmQsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2FtZVJlc3VtZSgpIHtcclxuICAgICAgICB0aGlzLnRhbmNodWFuZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICBpZiAoR2xvYmFsLmRpYW5qaVNvdW5kKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnYW1lQmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5kaWFuamlTb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmQsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxob21lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImdldFBoeXNpY3NNYW5hZ2VyIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSTtBQUNMSixJQUFBQSxFQUFFLENBQUNLLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZRyxpQkFBWixHQUFnQ0QsT0FBaEMsR0FBMEMsSUFBMUM7QUFDSCxHQVpJO0FBYUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FFLEVBQUFBLEtBbkJLLG1CQW1CRyxDQUVQLENBckJJLENBd0JMOztBQXhCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgLy8gb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAvLyAgICAgbGV0IHBsYXllckpzID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9wbGF5ZXJcIikuZ2V0Q29tcG9uZW50KFwicGxheWVyXCIpO1xyXG4gICAgLy8gICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09IFwicGxheWVyXCIpIHtcclxuICAgIC8vICAgICAgICAgcGxheWVySnMuanVtcFNraWxsID0gMTtcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gfSxcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4742fb7k5P3r8lT157ykhQ', 'ground');
// Script/ground.js

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
    var bgScript = cc.find("Canvas/Main Camera").getComponent("game_1");

    if (bgScript) {
      this.speed = bgScript.speed * 0.3;
    } else {
      console.log(bgScript);
    }
  },
  start: function start() {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    var playerJs = cc.find("Canvas/Main Camera/player").getComponent("player");

    if (other.node.group == "player") {
      playerJs.jumpSkill = 1;
    }

    ;
  },
  update: function update(dt) {
    this.node.y += this.speed * dt;

    if (this.node.y >= 600) {
      this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxncm91bmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJiZ1NjcmlwdCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJzcGVlZCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJwbGF5ZXJKcyIsIm5vZGUiLCJncm91cCIsImp1bXBTa2lsbCIsInVwZGF0ZSIsImR0IiwieSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSTtBQUNMSixJQUFBQSxFQUFFLENBQUNLLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZRyxpQkFBWixHQUFnQ0QsT0FBaEMsR0FBMEMsSUFBMUM7QUFDQSxRQUFJRSxRQUFRLEdBQUdULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLG9CQUFSLEVBQThCQyxZQUE5QixDQUEyQyxRQUEzQyxDQUFmOztBQUNBLFFBQUlGLFFBQUosRUFBYztBQUNWLFdBQUtHLEtBQUwsR0FBYUgsUUFBUSxDQUFDRyxLQUFULEdBQWlCLEdBQTlCO0FBQ0gsS0FGRCxNQUdLO0FBQUVDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBQXdCO0FBQ2xDLEdBakJJO0FBbUJMTSxFQUFBQSxLQW5CSyxtQkFtQkcsQ0FFUCxDQXJCSTtBQXdCTEMsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUlDLFFBQVEsR0FBR25CLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLDJCQUFSLEVBQXFDQyxZQUFyQyxDQUFrRCxRQUFsRCxDQUFmOztBQUNBLFFBQUlNLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLElBQW9CLFFBQXhCLEVBQWtDO0FBQzlCRixNQUFBQSxRQUFRLENBQUNHLFNBQVQsR0FBcUIsQ0FBckI7QUFDSDs7QUFBQTtBQUNKLEdBN0JJO0FBK0JMQyxFQUFBQSxNQS9CSyxrQkErQkVDLEVBL0JGLEVBK0JNO0FBQ1AsU0FBS0osSUFBTCxDQUFVSyxDQUFWLElBQWUsS0FBS2IsS0FBTCxHQUFhWSxFQUE1Qjs7QUFDQSxRQUFJLEtBQUtKLElBQUwsQ0FBVUssQ0FBVixJQUFlLEdBQW5CLEVBQXdCO0FBQ3BCLFdBQUtMLElBQUwsQ0FBVU0sT0FBVjtBQUNIO0FBQ0o7QUFwQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBiZ1NjcmlwdCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIikuZ2V0Q29tcG9uZW50KFwiZ2FtZV8xXCIpO1xyXG4gICAgICAgIGlmIChiZ1NjcmlwdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gYmdTY3JpcHQuc3BlZWQgKiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBjb25zb2xlLmxvZyhiZ1NjcmlwdCk7IH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgbGV0IHBsYXllckpzID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9wbGF5ZXJcIikuZ2V0Q29tcG9uZW50KFwicGxheWVyXCIpO1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09IFwicGxheWVyXCIpIHtcclxuICAgICAgICAgICAgcGxheWVySnMuanVtcFNraWxsID0gMTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID49IDYwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/heart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b85eaBfN0NL079GGbIAPoA1', 'heart');
// Script/heart.js

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
    time: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getPhysicsManager().enabled = true;
  },
  // onCollisionEnter: function (other, self) {
  //     let playerJs = cc.find("Canvas/Main Camera/player").getComponent("player");
  //     //let lifeLabel = cc.find("Canvas/Main Camera/life/life Label").getComponent("Label");
  //     if (other.node.group == "player") {
  //         playerJs.life++;
  //         self.node.destroy();
  //         other.lifeLabel.string = "X " + playerJs.life;
  //     };
  // },
  start: function start() {},
  update: function update(dt) {
    this.time += dt;

    if (this.time > 5) {
      this.node.runAction(new cc.blink(2, 5));
    }

    if (this.time > 7) {
      this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoZWFydC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpbWUiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsInJ1bkFjdGlvbiIsImJsaW5rIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRTtBQURFLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNJO0FBQ0xMLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBNEMsSUFBNUM7QUFDQVIsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlHLGlCQUFaLEdBQWdDRCxPQUFoQyxHQUEwQyxJQUExQztBQUNILEdBWkk7QUFhTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUUsRUFBQUEsS0F0QkssbUJBc0JHLENBRVAsQ0F4Qkk7QUEwQkxDLEVBQUFBLE1BMUJLLGtCQTBCRUMsRUExQkYsRUEwQk07QUFDUCxTQUFLUixJQUFMLElBQWFRLEVBQWI7O0FBQ0EsUUFBSSxLQUFLUixJQUFMLEdBQVksQ0FBaEIsRUFBbUI7QUFDZixXQUFLUyxJQUFMLENBQVVDLFNBQVYsQ0FBb0IsSUFBSWQsRUFBRSxDQUFDZSxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFwQjtBQUNIOztBQUNELFFBQUksS0FBS1gsSUFBTCxHQUFZLENBQWhCLEVBQW1CO0FBQ2YsV0FBS1MsSUFBTCxDQUFVRyxPQUFWO0FBQ0g7QUFDSjtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGltZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIC8vIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgLy8gICAgIGxldCBwbGF5ZXJKcyA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvcGxheWVyXCIpLmdldENvbXBvbmVudChcInBsYXllclwiKTtcclxuICAgIC8vICAgICAvL2xldCBsaWZlTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL2xpZmUvbGlmZSBMYWJlbFwiKS5nZXRDb21wb25lbnQoXCJMYWJlbFwiKTtcclxuICAgIC8vICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PSBcInBsYXllclwiKSB7XHJcbiAgICAvLyAgICAgICAgIHBsYXllckpzLmxpZmUrKztcclxuICAgIC8vICAgICAgICAgc2VsZi5ub2RlLmRlc3Ryb3koKTtcclxuICAgIC8vICAgICAgICAgb3RoZXIubGlmZUxhYmVsLnN0cmluZyA9IFwiWCBcIiArIHBsYXllckpzLmxpZmU7XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vIH0sXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudGltZSArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy50aW1lID4gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKG5ldyBjYy5ibGluaygyLCA1KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWUgPiA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/jellyfishes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxqZWxseWZpc2hlcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImdldFBoeXNpY3NNYW5hZ2VyIiwiYmdTY3JpcHQiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJub2RlIiwieCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFEQyxHQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSTtBQUNMTCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0FBQ0FSLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxpQkFBWixHQUFnQ0QsT0FBaEMsR0FBMEMsSUFBMUM7QUFDQSxRQUFJRSxRQUFRLEdBQUdWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLG9CQUFSLEVBQThCQyxZQUE5QixDQUEyQyxRQUEzQyxDQUFmOztBQUNBLFFBQUlGLFFBQUosRUFBYztBQUNWLFdBQUtOLEtBQUwsR0FBYU0sUUFBUSxDQUFDTixLQUFULEdBQWlCLENBQTlCO0FBQ0gsS0FGRCxNQUdLO0FBQUVTLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQXdCO0FBRWxDLEdBbEJJO0FBb0JMSyxFQUFBQSxLQXBCSyxtQkFvQkcsQ0FFUCxDQXRCSTtBQXdCTEMsRUFBQUEsTUF4Qkssa0JBd0JFQyxFQXhCRixFQXdCTTtBQUNQLFNBQUtDLElBQUwsQ0FBVUMsQ0FBVixJQUFlLEtBQUtmLEtBQUwsR0FBYWEsRUFBNUI7O0FBQ0EsUUFBSSxLQUFLQyxJQUFMLENBQVVDLENBQVYsSUFBZSxDQUFDLEdBQXBCLEVBQXlCO0FBQ3JCLFdBQUtELElBQUwsQ0FBVUUsT0FBVjtBQUNIO0FBQ0o7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwZWVkOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJnU2NyaXB0ID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoXCJnYW1lXzFcIik7XHJcbiAgICAgICAgaWYgKGJnU2NyaXB0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBiZ1NjcmlwdC5zcGVlZCAqIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBjb25zb2xlLmxvZyhiZ1NjcmlwdCk7IH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8PSAtNjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wSGVpZ2h0IiwianVtcER1cmF0aW9uIiwicGFjZSIsImZydWl0TGFiZWwiLCJMYWJlbCIsImp1bXBTb3VuZCIsIkF1ZGlvQ2xpcCIsImp1bXBTa2lsbCIsImxpZmUiLCJsaWZlTGFiZWwiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsImtleSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInVwIiwiR2xvYmFsIiwiZGlhbmppU291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJmaW5kIiwiZ2V0Q29tcG9uZW50Iiwic291bmQiLCJub2RlIiwicnVuQWN0aW9uIiwic2V0SnVtcEFjdGlvbiIsImxlZnQiLCJ2YWx1ZV9sZWZ0IiwicmlnaHQiLCJ2YWx1ZV9yaWdodCIsIktFWV9VUCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJncm91cCIsImRlc3Ryb3kiLCJibGluayIsInN0cmluZyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJsZWZ0TW92ZSIsIkFuaW1hdGlvbiIsInN0b3AiLCJyaWdodE1vdmUiLCJyTW92ZSIsIm1vdmVCeSIsInYyIiwibE1vdmUiLCJqdW1wVXAiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSO0FBQ0FD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QW1CbEUsRUFBRSxDQUFDcUIsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUE1QyxFQUFzRCxVQUFVQyxHQUFWLEVBQWU7QUFDakUsVUFBSUEsR0FBRyxDQUFDQyxPQUFKLElBQWV6QixFQUFFLENBQUMwQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsRUFBaEMsRUFBb0M7QUFDaEMsWUFBSSxLQUFLakIsU0FBTCxHQUFpQixDQUFyQixFQUF3QjtBQUNwQixjQUFJa0IsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCOUIsWUFBQUEsRUFBRSxDQUFDK0IsV0FBSCxDQUFlQyxJQUFmLENBQW9CaEMsRUFBRSxDQUFDaUMsSUFBSCxDQUFRLDBCQUFSLEVBQW9DQyxZQUFwQyxDQUFpRCxXQUFqRCxFQUE4REMsS0FBbEYsRUFBeUYsS0FBekYsRUFBZ0csQ0FBaEc7QUFDSDs7QUFDRCxlQUFLQyxJQUFMLENBQVVDLFNBQVYsQ0FBb0IsS0FBS0MsYUFBTCxFQUFwQjtBQUNBLGVBQUszQixTQUFMLEdBQWlCLENBQWpCO0FBQ0g7QUFDSjs7QUFBQTs7QUFDRCxVQUFJYSxHQUFHLENBQUNDLE9BQUosSUFBZXpCLEVBQUUsQ0FBQzBCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhWSxJQUFoQyxFQUFzQztBQUNsQyxhQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7O0FBQUE7O0FBQ0QsVUFBSWhCLEdBQUcsQ0FBQ0MsT0FBSixJQUFlekIsRUFBRSxDQUFDMEIsS0FBSCxDQUFTQyxHQUFULENBQWFjLEtBQWhDLEVBQXVDO0FBQ25DLGFBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDSDs7QUFBQTtBQUNKLEtBaEJELEVBZ0JHLElBaEJIO0FBaUJIO0FBaklJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXHJcbiAgICAgICAganVtcEhlaWdodDogMjAwLFxyXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMC4zLFxyXG4gICAgICAgIHBhY2U6IDEwLFxyXG4gICAgICAgIGZydWl0TGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGp1bXBTb3VuZDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIGp1bXBTa2lsbDogMSxcclxuICAgICAgICBsaWZlOiAzLFxyXG4gICAgICAgIGxpZmVMYWJlbDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL+aMieWOi+WKn+iDvVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnVwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qdW1wU2tpbGwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5kaWFuamlTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvcGF1c2VcIikuZ2V0Q29tcG9uZW50KFwiZ2FtZV9tZW51XCIpLnNvdW5kLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5zZXRKdW1wQWN0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcFNraWxsID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGtleS5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2xlZnQgPSAxO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoa2V5LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX3JpZ2h0ID0gMTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAvL+aKrOi1t+WKn+iDvVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2xlZnQgPSAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoa2V5LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX3JpZ2h0ID0gMDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09IFwiamVsbHlmaXNoXCIpIHtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZS0tO1xyXG4gICAgICAgICAgICBzZWxmLm5vZGUucnVuQWN0aW9uKG5ldyBjYy5ibGluaygwLjUsIDMpKTtcclxuICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpLmdldENvbXBvbmVudChcImdhbWVfMVwiKS50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZUxhYmVsLnN0cmluZyA9IFwiWCBcIiArIHRoaXMubGlmZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09IFwiaGVhcnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpZmUrKztcclxuICAgICAgICAgICAgdGhpcy5saWZlTGFiZWwuc3RyaW5nID0gXCJYIFwiICsgdGhpcy5saWZlO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09IFwiaG9tZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcFNraWxsID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlX2xlZnQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMubGVmdE1vdmUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIua0vuWkp+aYn+W3pui1sFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcIua0vuWkp+aYn+W3pui1sFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVfcmlnaHQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMucmlnaHRNb3ZlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCLmtL7lpKfmmJ/lj7PotbBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCLmtL7lpKfmmJ/lj7PotbBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgcmlnaHRNb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHJNb3ZlID0gY2MubW92ZUJ5KDAuMDIsIGNjLnYyKHRoaXMucGFjZSwgMCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucnVuQWN0aW9uKHJNb3ZlKTtcclxuICAgIH0sXHJcbiAgICBsZWZ0TW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBsTW92ZSA9IGNjLm1vdmVCeSgwLjAyLCBjYy52MigtdGhpcy5wYWNlLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5ydW5BY3Rpb24obE1vdmUpO1xyXG4gICAgfSxcclxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDot7Pot4PkuIrljYdcclxuICAgICAgICBsZXQganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCB0aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xyXG4gICAgICAgIC8vIOS4i+iQvVxyXG4gICAgICAgIC8vIGxldCBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgICAgICAvLyAvLyDljZXmrKHkuIrljYfkuIvokL1cclxuICAgICAgICAvLyByZXR1cm4gY2Muc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5ydW5BY3Rpb24oanVtcFVwKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5rZXlDb2RlID09IGNjLm1hY3JvLktFWS51cCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanVtcFNraWxsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHbG9iYWwuZGlhbmppU291bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL3BhdXNlXCIpLmdldENvbXBvbmVudChcImdhbWVfbWVudVwiKS5zb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuc2V0SnVtcEFjdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXBTa2lsbCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChrZXkua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9sZWZ0ID0gMTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGtleS5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9yaWdodCA9IDE7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtZW51LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicnVsZSIsIk5vZGUiLCJzdGFydCIsInNob3dSVUxFIiwiYWN0aXZlIiwiZGlzc2hvd1JVTEUiLCJwbGF5T24iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFSixFQUFFLENBQUNLO0FBREQsR0FIUDtBQU9MO0FBRUE7QUFFQUMsRUFBQUEsS0FYSyxtQkFXRyxDQUVQLENBYkk7QUFjTEMsRUFBQUEsUUFkSyxzQkFjTTtBQUNQLFNBQUtILElBQUwsQ0FBVUksTUFBVixHQUFtQixJQUFuQjtBQUNILEdBaEJJO0FBaUJMQyxFQUFBQSxXQWpCSyx5QkFpQlM7QUFDVixTQUFLTCxJQUFMLENBQVVJLE1BQVYsR0FBbUIsS0FBbkI7QUFDSCxHQW5CSTtBQXFCTEUsRUFBQUEsTUFyQkssb0JBcUJJO0FBQ0xWLElBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxTQUFaLENBQXNCLFFBQXRCO0FBQ0gsR0F2Qkk7QUF3QkxDLEVBQUFBLE1BeEJLLGtCQXdCRUMsRUF4QkYsRUF3Qk0sQ0FDUDtBQUNBO0FBQ0E7QUFDSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcnVsZTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBzaG93UlVMRSgpIHtcclxuICAgICAgICB0aGlzLnJ1bGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkaXNzaG93UlVMRSgpIHtcclxuICAgICAgICB0aGlzLnJ1bGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlPbigpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzZWxlY3RcIik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gbGV0IHBsYXllckpzID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgLy8gcGxheWVySnMudmFsdWVfbGVmdCA9IDA7XHJcbiAgICAgICAgLy8gcGxheWVySnMudmFsdWVfcmlnaHQgPSAwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
