// create a function that will retuen boolean value indicating if two 
// circles defined by center coordinates and radius are intersecting
function fun(){

function collisionCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R)
{
    return getDistance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R;
}

// Calculate the distance between the two specified points
function getDistance(x1, y1, x2, y2)
{
    let a = x2 - x1;
    let b = y2 - y1;
    
    return Math.sqrt(a* a + b * b); //math.sqrt it returns the root element nd cbrt() is used for the cube root
}
console.log(collisionCircle(200, 200, 100, 300, 300, 50));
document.write(collisionCircle(200,200,100,300,300,50))
}