// calculate sum of even num grater than 10 abd less than 30
function fun() {
    let evennum = 0;
    for (i = 10; i <= 30; i++) {
        if (i % 2) {
            evennum += i
        }
    }
    console.log(evennum)
    document.write(evennum)
}