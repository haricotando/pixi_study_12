import BaseScene from './class/display/BaseScene.js';
import GraphicsHelper from './class/helper/GraphicsHelper.js';
import ContentScene from './ContentScene.js';
import { dp, dataProvider } from './dataProvider.js';

class IntroScene extends BaseScene {
    constructor() {
        super();
        this.player = null;
    }

    init() {
        super.init();

        this.addChild(GraphicsHelper.exDrawRect(0, 0, dp.stageRect.width, dp.stageRect.height, {color:0xFF00FF, width:20}, false));
        const textSample = this.addChild(new PIXI.Text(`Scene: ${this.constructor.name}`, {
            fontFamily: 'Inter', 
            fontWeight: 700,
            fontSize: 65, fill: 0x545550,
        }));
        textSample.anchor.set(0.5);
        textSample.position.set(dp.stageRect.halfWidth, 100);

        this.player = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png');
        this.player.scale.set(10);
        this.player.anchor.set(0.5);
        this.player.position.set(dp.stageRect.halfWidth, dp.stageRect.halfHeight);
        this.addChild(this.player);

        const buttonChangeScene = this.addChild(new PIXI.Text('> CHANGE', {
            fontFamily: 'Inter', 
            fontWeight: 700,
            fontSize: 65, fill: 0x545550,
        }));
        buttonChangeScene.anchor.set(0.5);
        buttonChangeScene.position.set(dp.stageRect.halfWidth, dp.stageRect.height - 200);
        const onTap = (e) => {
            buttonChangeScene.interactive = false;
            this.readyToDie();
        };
        buttonChangeScene.on('pointertap', onTap);

        this.alpha = 0;
        gsap.timeline()
            .to(this, {alpha:1, duration:0.5, ease:'none'})
            .call(()=>{
                buttonChangeScene.cursor = 'pointer';
                buttonChangeScene.eventMode = 'static';
            });
    }

    /**
    * もしtickerが必要な場合は使う
    update(delta) {
    }
    */

    readyToDie(){
        gsap.timeline()
            .to(this, {alpha:0, duration:0.5, ease:'none'})
            .call(()=>{
                this.parent.changeScene(ContentScene);
            });
    }
}

export default IntroScene;