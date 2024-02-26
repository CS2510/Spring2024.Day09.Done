class DeathComponent extends Component {
    constructor(){
        super()
        console.log("Hi from DeathComponent constructor.")
    }
    start(){
        console.log("Hi from start function in death component.")
    }

    update() {

        let circleGameObject = null;
        for (let gameObject of currentScene.gameObjects) {
            if (gameObject.constructor.name == "CircleGameObject") {
                circleGameObject = gameObject
            }
        }

        if(!circleGameObject) return;

        let collision = Collisions.isCircleCircleCollision(
            { x: this.transform.x, y: this.transform.y },
            { x: circleGameObject.transform.x, y: circleGameObject.transform.y },
            50,
            50)


        if (collision) {
            currentScene = new DeadScene()
        }
    }
}