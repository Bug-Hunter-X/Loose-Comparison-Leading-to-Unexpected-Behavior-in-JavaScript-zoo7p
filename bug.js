function foo(x){
  if(x === null) return "null";
  if(x === undefined) return "undefined";
  return x;
}

console.log(foo(null)); // "null"
console.log(foo(undefined)); // "undefined"
console.log(foo(0)); // 0
console.log(foo(false));// false
console.log(foo(NaN));//NaN