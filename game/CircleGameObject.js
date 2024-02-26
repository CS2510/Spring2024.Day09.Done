class CircleGameObject extends GameObject {
    constructor() {
        super();
        this.transform.x = 0;
        this.transform.y = 0;

        console.log("Start of Circle Game Object constructor")

        this.addComponent(new Circle())
        this.addComponent(new KeyboardComponent())

        console.log("End of Circle Game Object constructor")


    }
    
    
}