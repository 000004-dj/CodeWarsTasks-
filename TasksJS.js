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

// function smash (words) {
//   return words.join(" ")
// };

// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf('needle');
//    // your code here
//  }

// var findAverage = function (nums) {
//   return (nums.map(a => +a).reduce((a, b) => a + b)) / nums.length;
//   // Code here
// }

// function mergeArrays(arr1, arr2) {
//   const x = [...arr1,...arr2];
//   x.sort((a, b) => a - b);
//   return x.filter((c, i) => x.indexOf(c) === i); // функция удаления повторяющихся элементов
// }

//   let rslt = [];
// function countBy(x, n) {
//   for (let i = x; i <= n; i++);
//   return rslt.push(i)
// }
// console.log(countBy(1,10));

// function check(a, x) { 
//   return a.includes(x); // поиск x в массиве a
//  }

// function past(h, m, s){
//   let sek = s * 1000;
//   let min = m * 60000;
//    let hour = h * 3600000;
//    return sek + min + hour
//  }
// function simpleMultiplication(number) {
//     if (number % 2 === 0){
//       return number * 8
//     } else {
//       return number * 9
//     }
    
//     }

// function helloWorld(){
//     const str = "Hello World!";
//     console.log(str)
//   }

// let v1 = 50,
//     v2 = 100,
//     v3 = 150,
//     v4 = 200,
//     v5 = 2,
//     v6 = 250;

// function equal1(){
//   let a = v1,   
//       b = v1;   
//   return a + b;
// }

// //Please refer to the example above to complete the following functions
// function equal2(){
//   let a =  v3, //set number value to a
//       b =  v1; //set number value to b
//   return a - b;
// }

// function equal3(){
//   let a =  v1, //set number value to a
//       b =  v5; //set number value to b
//   return a * b;
// }

// function equal4(){
//   let a =  v4, //set number value to a
//       b =  v5; //set number value to b
//   return a / b;
// }

// function equal5(){
//   let a =  v6, //set number value to a
//       b =  v3; //set number value to b
//   return a % b;
// }

// var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//   //select some variable to combine "Dad"
//   return d1 + a2 + d2 ;
// }
// function Bee(){
//   //select some variable to combine "Bee"
//   return b1 + e2 + e2;
// }
// function banana(){
//   //select some variable to combine "banana"
//   return b2 + a2 + n2 + a2 + n2 + a2;
// }

// //answer some questions if you finished works above
// function answer1(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer2(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer3(){
//   //the answer should be "yes" or "no"
//   return "yes";
// }

// function getLength(arr){
//     //return length of arr
//     return arr.length
//   }
//   function getFirst(arr){
//     //return the first element of arr
//     return arr[0]
//   }
//   function getLast(arr){
//     //return the last element of arr
//     return arr[arr.length - 1]
//   }
//   function pushElement(arr){
//     var el = 1;
//     arr.push(el)
//     //push el to arr
//     return arr
//   }
//   function popElement(arr){
//     //pop an element from arr
//     arr.pop()
//     return arr
//   }



// function animal(obj){
//     return 'This ' + obj.color.split('"') + ' ' + obj.name.split('"') + ' has ' + JSON.stringify(obj.legs) + ' legs.' 
//   }

function trueOrFalse(val){
    if (val == false || val == undefined || val == null)  {
      return 'false'
    } else if (val !== false) {
      return 'true'
    };
  }