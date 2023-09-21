class User{
    constructor(name){
this.name=name
    }

    logMe(){
        console.log(`USER is${this.name}`);
    }

    static createId(){
        return `123`
    }
}
const izhaar = new User("izhaar")
console.log(izhaar.createId());

class Teacher extends User{
    constructor(email){
        super(name)
        this.email=email
        
    }
    
}
const iphone = new User("iphone","iphone@gmail.com")
console.log(iphone.createId());