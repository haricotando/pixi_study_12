import BaseScene from './class/display/BaseScene.js';
import GraphicsHelper from './class/helper/GraphicsHelper.js';
import { UIKitButton } from './class/ui/UIKitButton.js';
import ContentScene from './ContentScene.js';
import { dp, dataProvider } from './dataProvider.js';

class IntroScene extends BaseScene {
    constructor() {
        super();
        this.player = null;

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

        this.player = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png');
        this.player.scale.set(10);
        this.player.anchor.set(0.5);
        this.player.x = dp.stageRect.halfWidth;
        this.player.y = dp.stageRect.halfHeight;
        this.addChild(this.player);

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

    update(delta) {
        if (this.player) {
            this.player.rotation += 0.01 * delta;
        }
    }

    readyToDie(){
        gsap.timeline()
            .to(this, {alpha:0, duration:0.5, ease:'none'})
            .call(()=>{
                this.parent.changeScene(ContentScene);
            });
    }

    destroyScene() {
        super.destroyScene(true);
        this.player = null;
    }
}

export default IntroScene;