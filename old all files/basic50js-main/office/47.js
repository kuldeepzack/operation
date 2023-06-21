// deep copy a jagged array with numbere or other array in new array
function fun(){
const array1 = [[1, 'a'], 2, 3, 4, 5];
const array2 = array1.slice();
console.log(array1,array2);
document.write(array1+"<br>",array2+"<br>");
array1[0][1] = 'b'; // changing array1 values only
array1[2] = 100
console.log(array1,array2); // [[ 1, 'b' ], 2, 100, 4, 5] // [[ 1, 'b' ], 2, 3, 4, 5]

document.write(array1+"<br>",array2)

}




