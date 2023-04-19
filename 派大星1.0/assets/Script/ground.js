// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        let bgScript = cc.find("Canvas/Main Camera").getComponent("game_1");
        if (bgScript) {
            this.speed = bgScript.speed * 0.3;
        }
        else { console.log(bgScript); }
    },

    start() {

    },


    onCollisionEnter: function (other, self) {
        let playerJs = cc.find("Canvas/Main Camera/player").getComponent("player");
        if (other.node.group == "player") {
            playerJs.jumpSkill = 1;
        };
    },

    update(dt) {
        this.node.y += this.speed * dt;
        if (this.node.y >= 600) {
            this.node.destroy();
        }
    },
});
