// calculate 10!
function fun() {
      n=document.getElementById("num").value;
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    console.log(factorial(10));
    document.write(factorial(10))
}
