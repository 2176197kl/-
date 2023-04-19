
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