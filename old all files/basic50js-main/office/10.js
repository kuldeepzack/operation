// sum of num in an array 
function fun() {
    n=document.getElementById("num").value;
    function sumArray(array) {
        const sum = array.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum;
    }

    const numbers = [1, 2, 3, 4];
    console.log(sumArray(numbers));
    document.write(sumArray(numbers))
}
