function getDistinctElements(numbers) {
  function inner() {
    return [...new Set(numbers)];
  }

  return inner();
}

const numbers = [1, 2, 3, 2, 4, 5, 1];
const distinctNumbers = getDistinctElements(numbers);

console.log(distinctNumbers); // Output: [1, 2, 3, 4, 5]
