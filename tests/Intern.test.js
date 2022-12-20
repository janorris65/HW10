const classImport = require('../classes');
const Intern = classImport.Four;

it( "should create an object with name, ID, Email, University and methods getName, getID, getEmail, getRole, getUni",()=>{
//Arrange
const nameTest = "John";
const IDTest = 3456;
const emailTest = "Love@Love.com";
const uniTest = "School of Rock";
//Act
let intern = new Intern(nameTest, IDTest, emailTest, uniTest);
//Assert
expect(intern.getName()).toEqual(nameTest);
expect(intern.getID()).toEqual(IDTest);
expect(intern.getEmail()).toEqual(emailTest);
expect(intern.getUni()).toEqual(uniTest);
expect(intern.getRole()).toEqual("Intern");
});