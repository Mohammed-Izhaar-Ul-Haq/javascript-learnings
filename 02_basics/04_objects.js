//const tinderUser=new Object()

const tinderUser={};

tinderUser.id="1";
tinderUser.name="izhaar";
tinderUser.isLoggedIn=false;

console.log(tinderUser);


//object inside object
const regularUser={
    id:"1",
    fullname:{
        firstName:"izee",
        lastName:"haar"
    }

}
// ? is used instead of if else
console.log(regularUser.fullname?.lastName);

// combining or joining two objects using assign() syntax obj.assign({target},obj1,obj2)

const obj3 =Object.assign({},tinderUser,regularUser);

console.log(obj3);

// combining or joining two objects like array {...obj1,...obj2}

const obj4={...tinderUser,...regularUser};

console.log(obj4);

//checking if property exists 

console.log(obj4.hasOwnProperty('id'));

//data from databases

const user=[
    {email:"@gmail.com"},
    {},
    {}
]

user[1].email


//keys and values of objects can be accessed by Object.keys  Object.values return type is array

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


//object destructuring 

const course={
    id:1,
    courseInstructor:"izhaar",
    price:"999"
}

const {courseInstructor}=course;

console.log(courseInstructor);

//changing name of destructuring using :

const {price:rs}=course;

console.log(rs);