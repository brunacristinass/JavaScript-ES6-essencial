/**
 if (condition) {
     //code
 }
 */

 const array = [0,1,2,3,4,5];

  array.forEach(item => {
   if (item % 2 === 0) {
       console.log(`O numero ${item} é par`);
   } else {
        console.log(`O numero ${item} é impar`);
   }
  });