//passing infinite numbers of arguements in functions

function calculateCartPrice(...num){
    return num;

}

console.log(calculateCartPrice(100,200,300));


//val1,val2 is being assigned first and then rest in num

function myFunc(val1,val2,...num){
  return num;
}
console.log(myFunc(100,200,300));

//passing parameters as objects

obj1={
  name:"izhaar",
  age:"22"
}
function getAge(obj){
  return `my age is ${obj.age}`
}

console.log(getAge(obj1));