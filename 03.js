const netflix = ["mirjapur","doremon"]
const prime = ["playground"]
prime.push(netflix)
console.table(prime);
console.log(typeof (prime));
const series = [...netflix,...prime]
console.log(series);


