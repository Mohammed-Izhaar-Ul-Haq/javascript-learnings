//immediately invoked function expression
//invoked immediately whenever we run 
//example database connections
// interview * *mainly used to avoid the problen of global variables pollution(variable of parents) */
//interview write two iife -> use ; after first


//named iife

(function chai(){
    console.log("DB Connection");
})();


//unnamed iife
( (name)=>{
    console.log(`DB Connection two ${name}`);
})('izhaar');