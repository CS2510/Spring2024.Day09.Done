class Component {
    parent = null //parentGameObject
    get transform() {
        return this.parent.transform;
    }
}