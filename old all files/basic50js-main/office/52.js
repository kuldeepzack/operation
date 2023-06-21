// calculate fibonacci with high precsion 
function fun(){
  function fibonacci(n) {
  let a = BigInt(0);
  let b = BigInt(1);
  
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
    return b.toString();
}

const result = fibonacci(500);
console.log(result);
document.write(result);
}