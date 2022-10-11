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