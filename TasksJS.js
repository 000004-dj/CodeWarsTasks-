// console.log('hello, world')

//task 2 

// let a = 1
// let b = 2 
// let c = 3
// function expressionMatter(a, b, c) {
//   let r = Math.max( 
//        a+b+c,
//         a*b*c,
//         a*b+c,
//         a*(b+c),
//         a+b*c,
//         (a+b)*c
//     );
//   return r // highest achievable result
// }

//task 2 

// function multipleOfIndex(array) {
//   const a = array.filter ((f, index) => f % index === 0);
// return a;
// }

//task 3

// function removeEveryOther(arr){
//   var result = arr.filter((e,i)=>!(i%2))
//   return result
  
// }

//task 4

// function abbrevName(name){
//   let newName = name.split(" ");
//  newName.forEach((item, index) => {
//    if (index === 0){
//      name = item.charAt() + '.'
//    } else {
//      name += item.charAt()
//    }
//  })
//   // code away
//   return name

// }

//task 4 

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//   let a = pontoonDistance;
//   let b = sharkDistance;
//   let c = youSpeed;
//   let d = dolphin;
//   let e = sharkSpeed;
//   let f = a / c;
//   let result = e; 
//   if (b === 0){
//       return "Shark Bait!";
//   };
//   if (d = true){ 
//           result = e / 2; 
//           };
//   if (d = false){ 
//           result = e; 
//           };        
//   if (f <= (b / result)) {
//       return "Alive!"
//   };
//       if (f > (b / result)) {
//           return "Shark Bait!"
//       };
// }

//task 5

// const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
// function howMuchILoveYou(nbPetals) {
//   let rslt
// if (nbPetals % 6 === 0) {
//   rslt = arr[5]
// } else {
//  rslt = arr[nbPetals % 6 - 1 ]
// };

//     return rslt
// };

// task 6

// function countSheeps(arrayOfSheep) {
//   const rslt = arrayOfSheep.filter(item => item === false )
// console.log(arrayOfSheep.length -rslt.length);
// }
// countSheeps(array1)

// task 7

// let rslt;
// let rslt2;
// let y;
// function noSpace(x){
//   rslt = x.split(" ");
//   y = "";
//   rslt2 = rslt.filter(item => item !== y);
//   return rslt2.join("")
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// task 8

// function arrayPlusArray(arr1, arr2) {
//   const rsltA = arr1 = arr1.reduce((sum, current) => sum + current, 0);
//   const rsltB = arr1 = arr2.reduce((sum, current) => sum + current, 0);
//   return rsltA + rsltB;
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// function sumMix(x){
//   return x.map(a => +a).reduce((a, b) => a + b);
// }

// function positiveSum(arr) {
//   const a = arr.filter(index => index > 0);
//   return a.reduce((sum, current) => sum + current, 0);
//  }

function smash (words) {
  return words.join(" ")
};