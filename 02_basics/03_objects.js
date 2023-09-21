//objects can be created using constructors and literals
//if created by constructors it is called singleton

Object.create

//creating object by literals

const jsUserOne={
    name:"izhaar",
    age:"22",
    email:"izhaar@gmail.com"
}

console.log(jsUserOne.name);

/*object can be accessed by two ways 
-->by .method() 
-->by [" "] if the key is declared inside " "
*/

const jsUserTwo={
    "name":"zee",
    age:"20",
    email:"zee@gmail.com"
}

console.log(jsUserTwo["name"]);

//to make it final like java we use (Object.freeze)

// Object.freeze(jsUserOne);

//  interview====>>using symbol in objects it can only be acessed by []

const mySym=Symbol("key1");

const jsUserThree={
    //accessing symbol
    [mySym]:"myKey1",
    "name":"zee",
    age:"20",
    email:"zee@gmail.com"
}
console.log(jsUserThree[mySym]);

//adding functions in objects

jsUserThree.greeting=function() {
    console.log(`hello ${this.name}`);
}
console.log(jsUserThree.greeting);