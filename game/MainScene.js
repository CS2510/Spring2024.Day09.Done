/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("lightgray")

      let circleGameObject = new CircleGameObject()
      this.gameObjects.push(circleGameObject)
      
      let deathGameObject = new DeathGameObject()
      this.gameObjects.push(deathGameObject)

      let deathGameObject2 = new DeathGameObject()
      deathGameObject2.transform.x = 300
      deathGameObject2.transform.y = 200
      this.gameObjects.push(deathGameObject2)
      
      let scoreUpdaterGameObject = new ScoreUpdaterGameObject()
      this.gameObjects.push(scoreUpdaterGameObject)

      let scoreGameObject = new ScoreGameObject()
      this.gameObjects.push(scoreGameObject)
  }
}