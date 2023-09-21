//reduce accumulater,current value

 const nums =[1,2,3]

 const myTotal=nums.reduce((acc,curval)=> acc+curval,0)

 console.log(myTotal);

 //practice example 

 const shoppingCart=[{

    itemName:"js",
    price:10
 },
 {

    itemName:"java",
    price:100
 },
 {

    itemName:"react",
    price:1000
 }]

 const cartTotal=shoppingCart.reduce((acc,currval)=>acc+(currval.price),0)

 console.log(cartTotal);