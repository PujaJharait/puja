export class Employee

{
    name;
    age;
    salary;
    designation;
    constructor(name,age,salary,designation)
    {
        this.name= name;
        this.age=age;
        this.salary=salary;
        this.designation=designation;
    }
    display()
    {
        console.log("-------");
        console.log("Name:" +this.name);
        console.log("Age"+this.age);
        console.log("salary"+this.salary);
        console.log("Designation"+this.designation);
    }
    
    }
var e1 = new Employee('Raju',21,1000,'CLerk');

e1.display();

class Programmer extends Employee{
    address;
    constructor(name,age,salary,designation,address)
    {
        super(name,age,salary,designation);
        this.address=address;
    }
    displayAll()
    {
        this.display();
        console.log("Address"+this.address);

    }
}
var p1 =new Programmer('Abi',24,35000,"Civil Er","Patna");
p1.displayAll();
