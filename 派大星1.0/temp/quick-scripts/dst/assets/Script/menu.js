
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