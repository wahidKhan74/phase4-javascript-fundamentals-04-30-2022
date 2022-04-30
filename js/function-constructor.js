// The Function constructor creates a new Function object. 

// 1. Object Literal
let employee = {
    id: 1212,
    name: 'John Smith',
    age: 34,
    salary: 345646.56,
    dept:"Sales"
};
console.log(employee);


let obj = new Object();
console.log(obj);

// 1. Function Object 
function Employee(id,name,salary,dept,email) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
    this.email = email;
}

let emp1 = new Employee(1001,'Mike Smith',45456.567,"HR",'mike@gmail.com');
let emp2 = new Employee(1002,'John Smith',55456.567,"HR",'john@gmail.com');
let emp3 = new Employee(1003,'David Smith',89456.567,"HR",'david@gmail.com');

console.log(emp1);
console.log(emp2);
console.log(emp3);