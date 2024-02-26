class ScoreUpdaterComponent extends Component {
  update() {
      Globals.score++
      this.parent.components[1].text = "" + Globals.score;
  }
}