const first = Array.from({ length: 25 }, (_, i) => "Student " + String(i + 1).padStart(2, "0"));
const second = Array.from({ length: 25 }, (_, i) => "Student " + String(i + 26).padStart(2, "0"));
const students = first.concat(second);
students.sort();
console.log("Sorted:", students);
students.reverse();
console.log("Reversed:", students);
console.log("Student 10 exists:", students.includes("Student 10"));
students.forEach((student, index) => console.log(index, student));
