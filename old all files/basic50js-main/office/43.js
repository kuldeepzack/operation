// create a function that will recieve a bi-dimensional arr as argument 
// nd num extract as unidimensional arr the col specyfied by num

function fun(){
let ar = [ ["John", 120],
            ["Jane", 115],
            ["Thomas", 123],
            ["Mel", 112],
            ["Charley", 122]
         ];

let numbers = extractCol(ar, 1);
function extractCol(ar, colNo)
{
    let arCol = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        arCol.push(ar[i][colNo]);
    }
    
    return arCol;
}
console.log(numbers);
document.write(numbers)
}