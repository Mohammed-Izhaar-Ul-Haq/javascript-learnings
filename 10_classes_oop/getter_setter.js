class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        //uppercase while getting the password
        return this._password.toUpperCase()
    }
    set password(value){
    this._password=value;
    }


}

const izhaar = new User("izhaar@gmail.com","123")
console.log(izhaar.password);