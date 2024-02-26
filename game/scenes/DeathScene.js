import Scene from "/engine/classes/Scene.js"
import GameObject from "/engine/classes/GameObject.js"
import Text from "/engine/components/Text.js"
import ScoreReaderComponent from "../components/ScoreReaderComponent.js"
import EndSceneCounterComponent from "../components/EndSceneCounterComponent.js"

/** The final scene in our game */
class DeathScene extends Scene {
  constructor() {
      super("black")
      
      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
      scoreGameObject.addComponent(new ScoreReaderComponent())
      this.gameObjects.push(scoreGameObject)
      scoreGameObject.transform.x = 30;
      scoreGameObject.transform.y = 30;

      let deathTextGameObject = new GameObject()
      deathTextGameObject.transform.x = 30
      deathTextGameObject.transform.y = 60
      deathTextGameObject.addComponent(new Text("You Died", "30px sans", "red"))
      this.gameObjects.push(deathTextGameObject)

      let endSceneGameObject = new GameObject("EndSceneCounterGameObject")
      endSceneGameObject.addComponent(new EndSceneCounterComponent())
      this.gameObjects.push(endSceneGameObject)
  }
}

export default DeathScene
