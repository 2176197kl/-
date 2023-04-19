// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        rule: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    showRULE() {
        this.rule.active = true;
    },
    disshowRULE() {
        this.rule.active = false;
    },

    playOn() {
        cc.director.loadScene("select");
    },
    update(dt) {
        // let playerJs = cc.find("Canvas/Main Camera").getComponent("player");
        // playerJs.value_left = 0;
        // playerJs.value_right = 0;
    },
});
