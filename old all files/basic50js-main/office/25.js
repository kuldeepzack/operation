function getExclusiveNumbers(arr1, arr2) {
  const exclusiveNumbers = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      exclusiveNumbers.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      exclusiveNumbers.push(arr2[i]);
    }
  }

  return exclusiveNumbers;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const resultArray = getExclusiveNumbers(array1, array2);
console.log(resultArray);
