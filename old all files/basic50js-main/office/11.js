// avg of num in array 
function fun() {
    
    function calculateAverage(numb) {
        if (numb.length === 0) {
            return 0;
        }

        const sum = numb.reduce((accumulator, currentValue) => accumulator + currentValue);
        const average = sum / numb.length;
  
        return average;
    }

    const numb = [5, 10, 15, 20];
    console.log(calculateAverage(numb));
    document.write(calculateAverage(numb));
}
