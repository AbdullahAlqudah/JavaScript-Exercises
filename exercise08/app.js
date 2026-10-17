const user = { name: "Ali", email: "ali@example.com", age: 24, address: "Amman" };
const { name: userName, email, age, address } = user;
const skills = ["HTML", "CSS", "JavaScript"];
const [firstSkill, secondSkill, thirdSkill] = skills;
function createUser(name = "Guest", email = "unknown@example.com", age = 18, address = "Not provided") {
  return { name, email, age, address };
}
console.log(userName, email, age, address);
console.log(firstSkill, secondSkill, thirdSkill);
console.log(createUser("Sara", "sara@example.com"));
console.log(createUser());
