let a = +prompt("a");
let b = +prompt("b");
let c = +prompt("c");

let max = a>b && a>c ? a : b>c ? b:c;
let min = a<b && a<c ? a : b<c ? b:c;
let mid = max>a && min<a ? a: max>b && min<b ? b:c;

console.log(min);
console.log(mid);
console.log(max);
