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
