import students, { getStudent, getStudents } from "./students.js";
import { calculateAverage, hasPassed } from "./grades.js";
const container = document.getElementById("students");
getStudents().forEach(student => {
  const p = document.createElement("p");
  p.textContent = `${student.id} - ${student.name} - Average: ${calculateAverage(student.grades).toFixed(2)} - ${hasPassed(student.grades) ? "Pass" : "Fail"}`;
  container.appendChild(p);
});
console.log(students, getStudent(1));
