//object
//any thing in curley bracket 
let stud = {
    gender: "male",
    "full name": "Ayush katiyar",//if the key is more tha one word then we use (" ")in the word;
    email: "ayushkatiyar0908@gmail.com",
    age: 18,
    location: "ghaziabad",
    logindays: ["sat", "sun", "tues"],
    islogin: true,
};
// console.log(stud);
// console.log(typeof stud);

stud.name = "Ayush katiyar";

// console.log(stud);
// console.table(stud);
// console.table(stud.age);
// console.table(stud["full name"]);
// console.table(stud["email"]);
// console.log(stud["full name"]);
// console.log(stud["name"]);
// anything except false ,null is true in javascript;
// if (stud.email) {
//       console.log(stud.email);
      
//}
// == (compare only value)
// === (compare  value &type)

 const sum = (...num) => {//(...) this is used to seprate the value.
     console.log(num);
}
     sum(10,120);
     sum(10);
     sum(10,1,2,3,4);
     sum();
     

