export class UIKitButton extends PIXI.Container {
      /**
     * 
     * @param {PIXI.Application} app - PIXIアプリのインスタンス
     * @param {bool} bool - デフォルトの値
     */

    constructor(app, label = false, rect = {width: 256, height: 64}) {
        super();

        this.label = '';
        app.stage.hitArea = app.screen;

        const offset = 2;

        const background = new PIXI.Graphics().lineStyle(2, 0xD9D9D9).beginFill(0xFFFFFF).drawRoundedRect(0, 0, rect.width, rect.height, rect.height / 4);
        this.addChild(background);
        background.cursor    = 'pointer';
        background.eventMode = 'static';


        if(label !== false){
            this.label = this.addChild(new PIXI.Text(label, {
                fontSize: 25, fill: 0x000000,
            }));
            this.label.anchor.set(0.5, 0.5);
            this.label.x = background.width / 2;
            this.label.y = background.height / 2;
        }
        
        const onToggle = (e) => {
            background.alpha = 0.5;
            
            this.emit("customEvent", { 
                target : background,
                message: "イベントが発火されました！"
            });
        }

        const onRelease = (e) => {
            background.alpha = 1;
        }
        
        background.on('pointerdown', onToggle).on('pointerup', onRelease).on('pointerupoutside', onRelease);
    }
}