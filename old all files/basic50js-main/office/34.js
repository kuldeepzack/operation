function getAllWords(str) {

 var array = [];
  for (var i = 0; i < str.length; i++) {
     array.push(str[i]);
   }
   return array;
   }

   console.log(getAllWords('Radagast the Brown'));