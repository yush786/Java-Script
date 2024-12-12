// myname = () =>
//     let Name = 'ayush katiyar'
// console.log("ayush katiyar");
//
// arrow function
const sayhi = () => console.log("your name");
sayhi();
const sum = (a, b) => (a * b) - (a + b);
console.log(sum(5, 6));

// if we use {} the return keyword will be use
const sum2 = (a=10, b=20) => {
    console.log(a + b),
    console.log(a * b),
    console.log(a / b),
}
          