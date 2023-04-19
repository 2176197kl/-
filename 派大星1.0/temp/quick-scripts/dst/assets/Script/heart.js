
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