const students = [
  { id: 1, name: "Ali", grades: [80, 90, 85] },
  { id: 2, name: "Sara", grades: [95, 88, 92] },
  { id: 3, name: "Omar", grades: [60, 75, 70] }
];
export const getStudent = id => students.find(student => student.id === id);
export const getStudents = () => students;
export default students;
