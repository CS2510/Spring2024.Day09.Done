import Engine from "/engine/Engine.js"
import Component from "/engine/classes/Component.js"
import Collisions from "/engine/static/Collisions.js"
import DeathScene from "../scenes/DeathScene.js"


class DeathComponent extends Component {
    constructor(){
        super()
    }
    start(){
    }

    update() {

        let circleGameObject = null;
        for (let gameObject of Engine.currentScene.gameObjects) {
            if (gameObject.name == "CircleGameObject") {
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
            Engine.currentScene = new DeathScene()
        }
    }
}

export default DeathComponent