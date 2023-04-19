// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        let bgScript = cc.find("Canvas/Main Camera").getComponent("game_1");
        if (bgScript) {
            this.speed = bgScript.speed * 1;
        }
        else { console.log(bgScript); }

    },

    start() {

    },

    update(dt) {
        this.node.x -= this.speed * dt;
        if (this.node.x <= -600) {
            this.node.destroy();
        }
    },
});
