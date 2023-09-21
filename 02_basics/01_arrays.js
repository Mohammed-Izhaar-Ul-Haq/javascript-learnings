//Arrays 
const myArray=[0,1,2,3,4];

console.log(myArray);

//
const arr = new Array("hello","world");

console.log(arr);

// added at the end
myArray.push(3);

//removed from end
myArray.pop();

/*unshift->adds to first (0 index) vs shift removes from first (0 index)*/

myArray.unshift(11);


myArray.shift(11);

/* slice vs splice 

in slice 1 to 3 -> 1,2 and 3 i not included

where as in splice 1 to 3 -> 1,2,3 where 3 is also included 

main key difference is 
        
        in slice the main array is modified 
        in splice the main array is not modified it remains same 

*/



console.log(myArray);



// join methods converts to string type

console.log(myArray.join());

