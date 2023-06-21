
    function printFibonacciNumbers(n) {
        let fibNumbers = [0, 1];
  
        for (let i = 2; i < n; i++) {
            fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
        }
  
        console.log(fibNumbers.join(","));
        
    }

    printFibonacciNumbers("10");

