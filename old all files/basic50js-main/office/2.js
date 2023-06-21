//odd num less thn 100;
function fun() {
    // let n;
    n=  document.getElementById("num").value;
    for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
      console.log(i);
      document.write(i+"<br>")
  }
}

}
