function fun() {
    function rotateleft(array) {
        return [array[1], array[2], array[0]];
    }
    console.log(rotateleft([3, 4, 5]));
    document.write(rotateleft([3, 4, 5]));
}