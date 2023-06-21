const str = '1 5 12 76 2';
const sumStringNumbers = (str = '') => {
   const findSum = (arr = []) => {
      const sum = arr.reduce((acc, val) => acc + val);
      return sum;
   };
   let sum = 0;
   const arr = str
      .split(' ')
      .map(Number);
   sum = findSum(arr);
   return sum;
};
console.log(sumStringNumbers(str));