// let myName="izhaar     "
// console.log(myName.truelength);

 //creating new function which returns true length

 let myHeroes=['thor','spiderman']

 let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`);
    }
 }

Object.prototype.izhaar=
function(){
    console.log(`hitesh is present in all object`);
}

//if declared inarray it gives prop to objects also

Array.prototype.heyIzhaar=function () {
    console.log(`izhaar sayl hello`);
}

//  heroPower.izhaar()
myHeroes.izhaar()
myHeroes.heyIzhaar()


//**********************inheritance******************

const User={
    name:"izhaar"
}

const Teacher={
    makeVideos:false
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
//old
Teacher.__proto__=User

//modern 
Object.setPrototypeOf(TeachingSupport,Teacher)