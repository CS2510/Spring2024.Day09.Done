import Component from "/engine/classes/Component.js"
import Globals from "/engine/static/Globals.js"

class ScoreUpdaterComponent extends Component {
  start(){
    Globals.score = 0;
  }
  update() {
      Globals.score++
      this.parent.components[1].text = "" + Globals.score;
  }
}

export default ScoreUpdaterComponent;