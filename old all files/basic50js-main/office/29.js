function calculatePrimeDistances(limit) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const primes = [];
  let prevPrime = null;

  for (let i = 2; primes.length < limit; i++) {
    if (isPrime(i)) {
      primes.push(i);

      if (prevPrime !== null) {
        const distance = i - prevPrime;
        console.log(`Distance between ${prevPrime} and ${i}: ${distance}`);
      }

      prevPrime = i;
    }
  }
}

const limit = 25;
calculatePrimeDistances(limit);
