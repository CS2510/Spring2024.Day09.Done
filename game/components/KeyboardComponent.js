import Component from "/engine/classes/Component.js"
import Input from "/engine/static/Input.js"
import Time from "/engine/static/Time.js"

class KeyboardComponent extends Component{
    constructor(){
        super();
    }
    update() {
        let speed = 100
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.x -= speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.x += speed / Time.fps
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.y -= speed / Time.fps
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.y += speed / Time.fps

    
    }
}

export default KeyboardComponent