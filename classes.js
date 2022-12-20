class Employee {
    constructor(name,ID,Email){
        this.name=name;
        this.ID=ID;
        this.Email=Email;
    };
    getName(){
        return this.name;
    };
    getID(){
        return this.ID;
    };
    getEmail(){
        return this.Email;
    };
    getRole(){
        return "Employee";
    };
};

class Manager extends Employee {
    constructor(name, ID, Email, officeNum){
        super(name, ID, Email)
        this.officeNum = officeNum
    };
    getRole(){
        return "Manager";
    };
    getofficeNum(){
        return this.officeNum;
    };
};

class Engineer extends Employee {
    constructor(name, ID, Email, GitHub){
        super(name, ID, Email)
        this.GitHub=GitHub
    };
    getRole(){
        return "engineer";
    };
    getgitHub(){
        return this.GitHub;
    };
};

class Intern extends Employee {
    constructor(name, ID, Email, Uni){
        super(name, ID, Email)
        this.Uni=Uni
    };
    getRole(){
        return "Intern";
    };
    getUni(){
        return this.Uni;
    };
};

module.exports = {
    One: Employee,
    Two: Manager,
    Three: Engineer,
    Four: Intern,
};