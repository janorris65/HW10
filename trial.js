class Employee {
    constructor(name,ID,Email){
        this.name=name;
        this.ID=ID;
        this.Email=Email;
    };
    getName(){};
    getID(){};
    getEmail(){};
    getRole(){
        console.log("Employee")
    };
};

class Manager extends Employee {
    constructor(name, ID, Email, officeNum){
        super(name, ID, Email)
        this.officeNum=officeNum
    };
    getRole(){
        console.log("Manager")
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

let engineer = new Engineer("Josh", 3456, "love", "lovens");
let intern = new Intern("Jill", 5678, "superlove", "unilove");

let employeeArray = [engineer, intern]
function trial (something){
    something.forEach(element => {
        if (element.getRole() == "engineer"){
            let engineerOutputTitle = document.createElement("ol");
            engineerOutputTitle.textContent = element.getRole();
            let position = document.querySelector("main");
            position.appendChild(engineerOutputTitle);
            let engineerOutputName = document.createElement("li");
            let engineerOutputID = document.createElement("li");
            let engineerOutputEmail = document.createElement("li");
            engineerOutputName.textContent = element.getName();
            engineerOutputID.textContent = element.getID();
            engineerOutputEmail.textContent = element.getEmail();
            let position1 = document.querySelector("ol");
            position1.appendChild(engineerOutputName);
            position1.appendChild(engineerOutputID);
            position1.appendChild(engineerOutputEmail);



            //create <ol> with <li>
            console.log(element.getgitHub())
        } else if (element.getRole() == "Intern"){
            console.log(element.getUni())
        }
    });    
};
trial(employeeArray);
