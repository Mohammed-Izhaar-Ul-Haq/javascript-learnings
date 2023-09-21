//filter map reduce
// const programming=["js","java","cpp"]

//for each does not return anything
// const values=programming.forEach((item)=>console.log(item))

//filter is used to filter
//filters returns values
const nums=[1,2,3,4,5]

nums.filter((num)=>console.log(num))

const newNums=[]
nums.forEach((item)=>{

    if(item>2){
        newNums.push(item)
    }
})

console.log(newNums);


//practice example

const books=[
    {title:"book one",genre:"fiction",publish:2000,edition:2002},
    {title:"book two",genre:"adventure",publish:2002,edition:2007},
    {title:"book three",genre:"fiction",publish:2005,edition:2006},
    {title:"book four",genre:"horror",publish:2007,edition:2011}
]

let  userBook=books.filter((book)=>{
    book.edition>2002
    return console.log((userBook));
})

//  titleFilter=books.filter((book)=>{
//     if(book.title==='book one'){
//         return console.log((titleFilter));
//     }
// })




  