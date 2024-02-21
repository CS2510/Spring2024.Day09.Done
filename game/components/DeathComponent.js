class DeathComponent extends Component {

    update() {

        let circleGameObject = null;
        for (let gameObject of currentScene.gameObjects) {
            if (gameObject.constructor.name == "CircleGameObject") {
                circleGameObject = gameObject
            }
        }

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