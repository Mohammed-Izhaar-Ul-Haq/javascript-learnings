//for each loop

const programming=["js","java","cpp"];

programming.forEach((item)=>console.log(item))

//it can also return 
programming.forEach((item,index,arr)=>console.log(item,index,arr))

//accessing objects inside array
//project cards in react

const programmingLanguageExt=[
    {
        language:"java",
        ext:".java"
    },
    {
        language:"c++",
        ext:".cpp"
    }
]

programmingLanguageExt.forEach((obj)=>{

    return console.log(obj.language);;
})