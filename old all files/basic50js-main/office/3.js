//print multp table;
function fun() {

    let n ;
    n=document.getElementById("num").value;
    for (i = 1; i <= 10; i++) {
        
        console.log(n + "*" + i + "=" + n * i)
        document.write(n+"*"+i+"="+n*i+"<br>")
        
    }
}