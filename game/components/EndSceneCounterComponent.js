import Engine from "/engine/Engine.js"
import Component from "/engine/classes/Component.js"
import Time from "/engine/static/Time.js"
import Globals from "/engine/static/Globals.js"
import MainScene from "../scenes/MainScene.js"


class EndSceneCounterComponent extends Component{
  constructor(){
    super();
  }
  start(){
    this.timeSinceDeath = 0;
  }
  update() {
    this.timeSinceDeath += Time.ms
    if (this.timeSinceDeath > 2000) {
        Globals.score = 0
        Engine.currentScene = new MainScene()
    }
  }
}

export default EndSceneCounterComponent