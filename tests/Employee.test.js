const classImport = require('../classes');
const Employee = classImport.One;

it( "should create an object with name, ID, Email and methods getName, getID, getEmail, getRole",()=>{
//Arrange
const nameTest = "John";
const IDTest = 3456;
const emailTest = "Love@Love.com";
//Act
let employee = new Employee(nameTest, IDTest, emailTest);
//Assert
expect(employee.getName()).toEqual(nameTest);
expect(employee.getID()).toEqual(IDTest);
expect(employee.getEmail()).toEqual(emailTest);
expect(employee.getRole()).toEqual("Employee");
});