//scopes

let a=300;
if(true){
  let a=20
  console.log("inner a",a)
}
console.log(a)

//scopes cntd
//parent child relationship children can take ice cream from parents not vice versa 


 const name="izhaar"
if(name==="izhaar"){
  

  if(true){
    const password="izhaar123"
    console.log(`${name}`)
  }

  console.log(password);
}


//interview +++++++++++++++++++++ interesting scope execution++++++++++++++++++

//possible to call myfun() if declared as function()

myfun()
function myfun(){
console.log("myfun")
}

// not possible to call myFun() if declared as 
//const myFun()=function()-> storing function in variable

myFun();
const myFun=function(){
  console.log("2nd func")
}

