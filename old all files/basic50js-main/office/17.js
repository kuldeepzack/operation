function fun() {
    function sum(n) {
        if (n < 0) n = -n
        let result = 0

        while (n > 0) {
            result += n % 10
            n = Math.floor(n / 10)
        }

        return result
    }
    console.log(sum("1023"))
    document.write(sum("1023"))
}