const students = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: "Student " + (i + 1), grade: (i * 7 + 30) % 101 }));
students.splice(5, 0, { id: 51, name: "New Student", grade: 90 });
students.splice(10, 1);
students.splice(15, 1, { id: 52, name: "Replacement Student", grade: 95 });
const selected = students.slice(0, 10);
console.log("Selected:", selected);
students.sort((a, b) => b.grade - a.grade);
students.forEach((student, index) => console.log(index + 1, student));
