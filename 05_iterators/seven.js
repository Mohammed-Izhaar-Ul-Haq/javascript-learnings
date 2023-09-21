//map better then for each

let nums=[1,2,3,4,5,5,]

const value=nums.map((item)=>{
    if(item>2)
    return console.log(item);
})

//chaining

const newNums=nums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNums);