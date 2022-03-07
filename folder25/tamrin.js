class user{
    constructor(usename,email){
        this.usern=usename
        this.email=email

    }
}

class sirvan extends user{
    constructor(usename,email,title){
        super(usename, email);
        this.title=title
    }
    
}
const person1 = new user("kazem", "kazem@email.com");
console.log(person1);