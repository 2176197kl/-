
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