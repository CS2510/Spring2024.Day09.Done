class KeyboardComponent extends Component{
    constructor(){
        super();
        console.log("Hi from Keyboard Component constructor.")
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