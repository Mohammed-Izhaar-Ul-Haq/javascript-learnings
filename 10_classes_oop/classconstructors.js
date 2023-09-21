class User{
    constructor(name,email,password){
        this.name=name;
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeName(){
        return `${this.name.toUpperCase()}`
    }
}

const izhaar=new User("izhaar","izhaar@google.com","zeeshan")

console.log(izhaar.encryptPassword());
console.log(izhaar.changeName());