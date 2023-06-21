// create a function to calculate the sum of all the number jagged array
function fun (){
let ar = [3, 9, [1, [23], [5, 12]], [10]];
function sumArray(ar)
{
    let sum = 0;
    for(let elment of ar)
    {
        if (Array.isArray(elment))
        {
            elment = sumArray(elment);
        }
        
        sum += elment;
    }
    
    return sum;
}

console.log(sumArray(ar));
document.write(sumArray(ar))
}
