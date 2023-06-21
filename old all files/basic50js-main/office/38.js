// create function that will convert an array that will containing ASCII codes in string
function fun(){
    console.log(codesToString([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]));
    document.write(codesToString([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]));

function codesToString(array)
{
    return String.fromCharCode(...array);
}
}
