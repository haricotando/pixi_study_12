import { dp, dataProvider } from "./dataProvider.js";
import GraphicsHelper from "./class/helper/GraphicsHelper.js";

import SceneManager from './SceneManager.js';
import IntroScene from './IntroScene.js';

export class ApplicationRoot extends PIXI.Container {
    
    constructor() {
        super();

        this.currentScene = null;
        dp.app.ticker.add((delta) => {
            this.update(delta);
        });

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

    update(delta) {
        if (this.currentScene) {
            this.currentScene.update(delta);
        }
    }
}