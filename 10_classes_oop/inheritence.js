class User{
    constructor(name){
this.name=name
    }

    logMe(){
        console.log(`USER is${this.name}`);
    }
}

class Teacher extends User{
    constructor(name,email,password){
        super(name)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`new course added by ${this.name}`);
    }
}
const chai= new Teacher("chai","chai@gmail.com","123")

chai.addCourse()