function setUserName(name){
    this.name=name
    console.log("called");
}

//call is used to hold reference of called object
//call passes current executin context to another function
function createUser(name,phone){
    setUserName.call(this,name)
    
    this.phone=phone
}
const chai =new createUser("izhaar",7019409191)
console.log(chai);