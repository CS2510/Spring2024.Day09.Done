import Transform from "/engine/components/Transform.js"

class GameObject{
    components = []
    constructor(name){
        this.name = name
        this.addComponent(new Transform())
    }

    get transform(){
        return this.components[0]
    }

    addComponent(component){
        this.components.push(component);
        component.parent = this;
    }
    start(ctx){
        for(let component of this.components){
            if(component.start){
                component.start(ctx)
            }
        }
    }
    update(ctx){
        for(let component of this.components){
            if(component.update){
                component.update(ctx)
            }
        }
    }
    draw(ctx){
        for(let component of this.components){
            if(component.draw){
                component.draw(ctx)
            }
        }
    }
}

export default GameObject