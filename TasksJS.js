console.log('hello, world')

//task 2 
let a = 1
let b = 2 
let c = 3
function expressionMatter(a, b, c) {
  let r = Math.max( 
       a+b+c,
        a*b*c,
        a*b+c,
        a*(b+c),
        a+b*c,
        (a+b)*c
    );
  return r // highest achievable result
}

//task 2 
function multipleOfIndex(array) {
  const a = array.filter ((f, index) => f % index === 0);
return a;
}

//task 3
function removeEveryOther(arr){
  var result = arr.filter((e,i)=>!(i%2))
  return result
  
}
//task 4
function abbrevName(name){
  let newName = name.split(" ");
 newName.forEach((item, index) => {
   if (index === 0){
     name = item.charAt() + '.'
   } else {
     name += item.charAt()
   }
 })
  // code away
  return name

}

//task 4 
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let a = pontoonDistance;
  let b = sharkDistance;
  let c = youSpeed;
  let d = dolphin;
  let e = sharkSpeed;
  let f = a / c;
  let result = e; 
  if (b === 0){
      return "Shark Bait!";
  };
  if (d = true){ 
          result = e / 2; 
          };
  if (d = false){ 
          result = e; 
          };        
  if (f <= (b / result)) {
      return "Alive!"
  };
      if (f > (b / result)) {
          return "Shark Bait!"
      };
}
//task 5
const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
function howMuchILoveYou(nbPetals) {
  let rslt
if (nbPetals % 6 === 0) {
  rslt = arr[5]
} else {
 rslt = arr[nbPetals % 6 - 1 ]
};

    return rslt
};
// task 6
