// calculate 70! with high precision 
function fun(){
  function factorial(n) {
  let result = BigInt(1);
  
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  
  return result.toString();
}

const result = factorial(70);
console.log(result);
document.write(result)
}
