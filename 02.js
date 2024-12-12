//symbol always return unique value

let a = Symbol(10);
console.log(a);

let b = Symbol(10);
console.log(b);

console.log(a === b);
console.log(a == b);

console.log(typeof a);
console.log(typeof b);

let studs = ["abc", "def", "ghi",22,14,2500,undefined];
console.log(typeof studs);
console.log(studs);

//console.table(studs);
console.log(studs[1]);
console.log(studs[-2]) //not work with -ve indexing

studs.push("ram")//append at last
studs.unshift("shyam")// add at first
studs.pop()//remove from last
studs.shift();// remove from first
console.log(studs);

