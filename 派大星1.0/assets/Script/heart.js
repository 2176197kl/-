// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        time: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
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
    start() {

    },

    update(dt) {
        this.time += dt;
        if (this.time > 5) {
            this.node.runAction(new cc.blink(2, 5));
        }
        if (this.time > 7) {
            this.node.destroy();
        }
    },
});
