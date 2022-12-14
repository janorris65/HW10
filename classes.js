class Employee {
    constructor(name,ID,Email){
        this.name=name;
        this.ID=ID;
        this.Email=Email;
    };
    getName(){};
    getID(){};
    getEmail(){};
    getRole(){};
};

class Manager extends Employee {
    constructor(name, ID, Email, officeNum){
        super(name, ID, Email)
        this.officeNum=officeNum
    };
    getRole(){};
};

class Engineer extends Employee {
    constructor(name, ID, Email, GitHub){
        super(name, ID, Email)
        this.GitHub=GitHub
    };
    getRole(){};
};

class Intern extends Employee {
    constructor(name, ID, Email, Uni){
        super(name, ID, Email)
        this.Uni=Uni
    };
    getRole(){};
};

module.exports = {
    One: Employee,
    Two: Manager,
    Three: Engineer,
    Four: Intern,
};