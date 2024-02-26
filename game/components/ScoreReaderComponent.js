import Component from "/engine/classes/Component.js"
import Globals from "/engine/static/Globals.js"


class ScoreReaderComponent extends Component {
  update() {
      this.parent.components[1].text = "" + Globals.score;
  }
}

export default ScoreReaderComponent