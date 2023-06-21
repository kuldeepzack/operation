
    function getPositiveNumbers(numbers) {
        const positiveNumbers = numbers.filter(number => number > 0);
        return positiveNumbers;
    }

    const numbers = [-2, 5, -10, 15, -20, 25];
    console.log(getPositiveNumbers(numbers));
    