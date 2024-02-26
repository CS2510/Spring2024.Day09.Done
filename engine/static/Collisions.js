class Collisions{
    static isCircleCircleCollision(centerOne, centerTwo, radiusOne, radiusTwo){
        let distance = Math.sqrt((centerOne.x-centerTwo.x)**2+(centerOne.y-centerTwo.y)**2)
        if (radiusOne + radiusTwo > distance)
            return true;
        return false;
    }
    
}

window.Collisions = Collisions
export default Collisions;