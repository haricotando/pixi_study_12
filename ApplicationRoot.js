import { dp, dataProvider } from "./dataProvider.js";
import IntroScene from './IntroScene.js';

export class ApplicationRoot extends PIXI.Container {
    
    constructor() {
        super();

        this.currentScene = null;

        /**
         * もしtickerが必要な場合は使う
        dp.app.ticker.add((delta) => {
            this.update(delta);
        });
        */
        
        this.init();
    }

    init(){
        this.changeScene((IntroScene));
    }

    /* =======================================================
    *    SceneManage
    ======================================================= */
    changeScene(newSceneClass) {
        if (this.currentScene) {
            this.currentScene.destroyScene();
        }
        this.currentScene = new newSceneClass();
        this.currentScene.init();
        this.addChild(this.currentScene);
    }

    /**
    * もしtickerが必要な場合は使う
    update(delta) {
        if (this.currentScene) {
            this.currentScene.update(delta);
        }
    }
    */
}