// let myDate =Date();
// console.log(myDate);

//defining format

let myDate = new Date("11-10-2000");
// console.log(myDate);

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

//miliseconds

let myMilli=Date.now();
console.log(myMilli);
console.log(myDate.getTime());


//interview question to convert into mili second
console.log(Math.floor(myMilli/1000));