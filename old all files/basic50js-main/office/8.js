// create a function that'll convert celtofah 
function fun() {
    n=document.getElementById("num").value;
    function celsiusToFahrenheit(celsius) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        return fahrenheit;
    }

    console.log(celsiusToFahrenheit(n));
    document.write(celsiusToFahrenheit(n))
}
