import Input from "/engine/static/Input.js"
import Time from "/engine/static/Time.js"


class Engine {
  /**
         * The game loop.
         * The game loop calls update and draw using a timer
         */
  static gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    //Make the canvas the same size as our window
    //so it is "full screen"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    Engine.currentScene.start(ctx);

    // Update the current scene
    Engine.currentScene.update(ctx)

    //Draw in world space
    Engine.currentScene.draw(ctx)

    //Draw in Screen/UI space
    //currentScene.drawUI(ctx)
  }

  /** Setup the game **/
  static setup() {
    document.addEventListener("keydown", Input.keydown)
    document.addEventListener("keyup", Input.keyup)

    document.addEventListener("mousemove", Input.mousemove)


    //In the background, create a thread and call
    //gameLoop every 100ms.

    setInterval(Engine.gameLoop, Time.ms)
  }
}

export default Engine;