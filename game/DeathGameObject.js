class DeathGameObject extends GameObject {
    constructor() {
        super();
        this.transform.x = 200;
        this.transform.y = 0;

        this.addComponent(new DeathComponent())
        this.addComponent(new Circle("red", "black"))
    }
    
    
}