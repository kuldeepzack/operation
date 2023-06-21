// convert fahtocel 
function fun() {
     n=document.getElementById("num").value;
    function fahrenheitToCelsius(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
    }

    console.log(fahrenheitToCelsius(n));
    document.write(fahrenheitToCelsius(n))
}
