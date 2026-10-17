class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}
class Student extends Person {
  constructor(name, email, studentId) {
    super(name, email);
    this.studentId = studentId;
  }
  getInfo() {
    return `${super.getInfo()} - Student ID: ${this.studentId}`;
  }
}
class Instructor extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
  getInfo() {
    return `${super.getInfo()} - Subject: ${this.subject}`;
  }
}
const people = [new Person("Mona", "mona@example.com"), new Student("Ali", "ali@example.com", 1001), new Instructor("Sara", "sara@example.com", "JavaScript")];
people.forEach(person => console.log(person.getInfo(), person instanceof Person));
