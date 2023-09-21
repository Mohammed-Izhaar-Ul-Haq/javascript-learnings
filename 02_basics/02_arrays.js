/*joining to arrays using 

->join()
->concatinate()--has limited number as 1(it does not return new array)
->best way [...array name , ...array_name2]->can add any number of arrays(it returns new array)


*/

const arr=new Array(1,2,3,4,5);

const arr1=new Array(1,2,3,4,5);

const bestWay=[...arr,...arr1];

console.log(bestWay);

// we can also add variables as elements of array

let var1=1;
let var2=1;
let var3=1;

const varArray=[var1,var2,var3];
console.log(varArray);

//from and of in arrays

console.log(Array.from("izhaar"));

console.log(Array.of("izhaar","zeeshan"));

