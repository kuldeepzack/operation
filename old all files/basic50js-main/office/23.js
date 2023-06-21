function fun(){
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const String = "Hello, world!";
const reversedString = reverseString(String);
console.log(reversedString);
document.write(reversedString)
}
