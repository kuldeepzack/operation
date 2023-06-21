// print prime numbers from 1 to 100 using while loop

function fun() {
    let isPrime = true;
 
    console.log("Prime numbers from 1 to 100 are: ");
 
    let i = 2;
    while (i <= 100) {
        let j = 2;
        while (j < i - 1) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
            j++;
        }
        if (isPrime) {
            console.log(i);
            document.write(i+"<br>")
        }
        isPrime = true;
        i++;
    }
}