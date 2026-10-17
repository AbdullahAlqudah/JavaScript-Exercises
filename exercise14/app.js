let tasks;
try {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (!Array.isArray(tasks)) tasks = [];
} catch {
  tasks = [];
}
const input = document.getElementById("task");
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}
function render() {
  const list = document.getElementById("tasks");
  list.replaceChildren();
  document.getElementById("count").textContent = `Total tasks: ${tasks.length}`;
  tasks.forEach(task => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => { task.completed = checkbox.checked; save(); };
    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.textDecoration = task.completed ? "line-through" : "none";
    const remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.onclick = () => { tasks = tasks.filter(item => item.id !== task.id); save(); };
    li.append(checkbox, span, remove);
    list.appendChild(li);
  });
}
document.getElementById("add").onclick = () => {
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ id: Date.now() + Math.random(), text, completed: false });
  input.value = "";
  save();
};
document.getElementById("clear").onclick = () => { tasks = []; save(); };
render();
