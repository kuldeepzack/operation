// print the number 1 to 10

function fun()
{
    let n;
    n= document.getElementById("num").value;

    for (i = 1; i <= n; i++) {
        console.log(i);
        
        document.write(i+"<br>");
    }
}