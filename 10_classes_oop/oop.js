//object literal
// const user={
//     username:"izhaar",
//     loginCount:8,
//     signIn:true,
//     getUSerDetails: function(){
//         // console.log('got user detrails from db');
//         console.log(`${this.username}`);
//     }
// }


// console.log(user.username);
// console.log(user.getUSerDetails());


// const promiseOne=new Promise()
// const date =new Date()
function User(username,loginCount,isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;

    this.isLoggedIn-isLoggedIn;

    return this
}

const userOne=User("izhaar",12,true)
console.log(userOne);