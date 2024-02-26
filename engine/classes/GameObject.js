class GameObject{
    components = []
    constructor(){
        this.addComponent(new Transform())
    }

    // gameObject.components.push({})
    // gameObject.addComponent({})
    // gameObject.transform -> gameObject.setTransform({})
    // 

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