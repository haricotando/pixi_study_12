import BaseScene from './class/display/BaseScene.js';
import GraphicsHelper from './class/helper/GraphicsHelper.js';
import { dp, dataProvider } from './dataProvider.js';
import IntroScene from './IntroScene.js';

class ContentScene extends BaseScene {
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
                this.parent.changeScene(IntroScene);
            });
    }
}

export default ContentScene;