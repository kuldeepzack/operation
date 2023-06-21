function calculatePrimeSum(limit) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let sum = 0;
  const primes = [];
  for (let i = 2; primes.length < limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
        sum += i;
    }
  }

  return [sum, primes];
}

const limit = 25;
const [primeSum, primeNumbers] = calculatePrimeSum(limit);

console.log("sum", primeSum);
console.log("numbers:", primeNumbers);
