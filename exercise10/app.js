const students = [
  { id: 1, name: "Ali", grade: 90 },
  { id: 2, name: "Sara", grade: 45 },
  { id: 3, name: "Omar", grade: 75 },
  { id: 4, name: "Lina", grade: 60 },
  { id: 5, name: "Noor", grade: 30 }
];
const container = document.getElementById("reports");
students.forEach(student => {
  const report = `Name: ${student.name}
ID: ${student.id}
Grade: ${student.grade}
Status: ${student.grade >= 50 ? "Pass" : "Fail"}`;
  const pre = document.createElement("pre");
  pre.textContent = report;
  container.appendChild(pre);
});
