
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Will get to later to make this more smart
// function dependency(arr){
//     arr.forEach(function(func){
//       try{
//           var test = func();
//           if(test === null || test === undefined){
//               return false;
//           }
//       }
//       catch(err){
//           console.log(err);
//           return false;
//       }
//     });
//     return true;
// }