function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return "Hello, I am " + this.name;
};
function Employee(name, age, employeeId, position) {
  Person.call(this, name, age);
  this.employeeId = employeeId;
  this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.greet = function () {
  return Person.prototype.greet.call(this) + ", working as " + this.position;
};
var employees = [new Employee("Ali", 25, 1, "Developer"), new Employee("Sara", 28, 2, "Designer"), new Employee("Omar", 30, 3, "Manager")];
employees.forEach(function (employee) {
  console.log(employee.greet(), employee instanceof Person, employee instanceof Employee);
});
