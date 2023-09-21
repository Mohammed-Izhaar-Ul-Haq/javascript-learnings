
function addTwoNumbers(num1,num2){
    return num1+num2;
}

addTwoNumbers(9+3);

function userLoginMessage(username){
if(!username){
    console.log("please add user name!!!")
}
return `${username} just loggedin`;
}

console.log(userLoginMessage);