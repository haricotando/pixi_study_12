class Scene {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container(); // シーン用のコンテナ
        this.app.stage.addChild(this.container);
    }

    // シーンの初期化処理
    init() {
        console.log('Scene initialized');
    }

    // フレームごとの更新処理
    update(delta) {
        // 継承したシーンで実装
    }

    // シーンの破棄処理
    destroy() {
        this.app.stage.removeChild(this.container);
        this.container.destroy({ children: true });
    }
}

export default Scene;