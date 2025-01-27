import BaseScene from './class/display/BaseScene.js';
import GraphicsHelper from './class/helper/GraphicsHelper.js';
import { UIKitButton } from './class/ui/UIKitButton.js';
import { dp, dataProvider } from './dataProvider.js';
import IntroScene from './IntroScene.js';

class ContentScene extends BaseScene {
    constructor() {
        super();
    }

    init() {
        super.init();

        this.addChild(GraphicsHelper.exDrawRect(0, 0, dp.stageRect.width, dp.stageRect.height, {color:0xFF00FF, width:2}, false));
        
        const textSample = this.addChild(new PIXI.Text(`Scene: ${this.constructor.name}`, {
            fontFamily: 'Inter', 
            fontWeight: 700,
            fontSize: 65, fill: 0x545550,
        }));
        textSample.anchor.set(0.5, 0);
        textSample.x = dp.stageRect.halfWidth;
        textSample.y = 100;

        const uiButton = this.addChild(new UIKitButton(dp.app, 'change scene'));
        uiButton.position.set(dp.stageRect.halfWidth - uiButton.width / 2, dp.stageRect.height - 200);
        uiButton.on('customEvent', (data) => {
            this.removeChild(uiButton);
            this.readyToDie();
        });

        this.alpha = 0;
        gsap.timeline()
            .to(this, {alpha:1, duration:0.5, ease:'none'});   
    }

    readyToDie(){
        gsap.timeline()
            .to(this, {alpha:0, duration:0.5, ease:'none'})
            .call(()=>{
                this.parent.changeScene(IntroScene);
            });
    }

    destroyScene() {
        super.destroyScene(true);
    }
}

export default ContentScene;