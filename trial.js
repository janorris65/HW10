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
        this.officeNum=officeNum
    };
    getRole(){
        return "Manager";
    };
    getofficeNum(){
        return this.officeNum;
    }
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
function addWorkersHtml (something){
    something.forEach(element => {
        if (element.getRole() == "engineer"){
            let engineerOutputTitle = document.createElement("ol");
            engineerOutputTitle.textContent = element.getRole();
            let position = document.querySelector("main");
            position.appendChild(engineerOutputTitle);
            let engineerOutputName = document.createElement("li");
            let engineerOutputID = document.createElement("li");
            let engineerOutputEmail = document.createElement("li");
            let engineerOutputGitHub = document.createElement("li");
            engineerOutputName.textContent = element.getName();
            engineerOutputID.textContent = element.getID();
            engineerOutputEmail.textContent = element.getEmail();
            engineerOutputGitHub.textContent = element.getgitHub();
            let position1 = document.querySelector("ol");
            position1.appendChild(engineerOutputName);
            position1.appendChild(engineerOutputID);
            position1.appendChild(engineerOutputEmail);
            position1.appendChild(engineerOutputGitHub);
        } else if (element.getRole() == "Intern"){
            let internOutputTitle = document.createElement("ol");
            internOutputTitle.textContent = element.getRole();
            let position = document.querySelector("main");
            position.appendChild(internOutputTitle);
            let internOutputName = document.createElement("li");
            let internOutputID = document.createElement("li");
            let internOutputEmail = document.createElement("li");
            let internOutputUni = document.createElement("li");
            internOutputName.textContent = element.getName();
            internOutputID.textContent = element.getID();
            internOutputEmail.textContent = element.getEmail();
            internOutputUni.textContent = element.getUni();
            let position1 = document.querySelector("ol");
            position1.appendChild(internOutputName);
            position1.appendChild(internOutputID);
            position1.appendChild(internOutputEmail);
            position1.appendChild(internOutputUni);
        }
    });    
};
addWorkersHtml(employeeArray);
