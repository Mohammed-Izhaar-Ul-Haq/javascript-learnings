//this and arrow function

//this-> is used to refer current context

const user={
    username:"izhaar",
    age:"22",
    
    welcomeMesssge: function(){
        console.log(`${this.username} welcome to the website`);
        
    }
}

user.welcomeMesssge()

user.username="sam";

user.welcomeMesssge()

console.log(this); 


//
// function chai(){
//     console.log(this);
// }
// chai();

//arrow function 
// there are 2 types of return function explicit return and implicit return 

// const chai=() =>{
//     let username="zeeshan"
//     console.log(this);

// }

// chai()

//explicit return
const addTwo=(num1,num2) =>{
    return num1+num2;
}

//implicit return

const addAny=(...num) =>(num);

console.log(addAny(1,3,3,3));




