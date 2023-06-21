// create function to calculate the distance between two point defined by thier x,y cord
function fun(){
function getDistance(x1, y1, x2, y2) {
    let a = x2 - x1;
    let b = y2 - y1;
    
    return Math.sqrt(a * a + b * b);
}
console.log(getDistance(100, 100, 400, 300));
document.write(getDistance(100,100,400, 300));
}