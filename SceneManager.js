class SceneManager {
    constructor(app) {
        this.app = app;
        this.currentScene = null;
    }

    changeScene(newSceneClass) {
        if (this.currentScene) {
            this.app.stage.removeChild(this.currentScene);
            this.currentScene.destroyScene(); // 破棄
        }

        this.currentScene = new newSceneClass(this.app);
        this.currentScene.init(); // 初期化
        this.app.stage.addChild(this.currentScene);
    }

    update(delta) {
        if (this.currentScene) {
            this.currentScene.update(delta);
        }
    }
}

export default SceneManager;
