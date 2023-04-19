
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