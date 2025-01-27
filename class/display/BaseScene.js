class BaseScene extends PIXI.Container {
    constructor() {
        super();
    }

    init() {
        console.log(`Scene initialized - ${this.constructor.name}`);
        
    }
    
    update(delta) {
    }

    destroyScene(forceDestroy = false) {
        if(forceDestroy){
            this.children.forEach((child) => child.destroy());
        }
        this.removeChildren();
        this.parent.removeChild(this);
        console.log(`Scene destroyed - ${this.constructor.name}`);
    }
}

export default BaseScene;