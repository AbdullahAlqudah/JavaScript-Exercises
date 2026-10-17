const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
function display() {
  const list = document.getElementById("items");
  list.replaceChildren();
  document.getElementById("count").textContent = `Items: ${localStorage.length}`;
  document.getElementById("firstKey").textContent = `First key: ${localStorage.key(0) ?? "None"}`;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement("li");
    li.textContent = `${key}: ${localStorage.getItem(key)}`;
    list.appendChild(li);
  }
}
document.getElementById("save").onclick = () => { if (keyInput.value.trim()) localStorage.setItem(keyInput.value, valueInput.value); display(); };
document.getElementById("read").onclick = () => { document.getElementById("result").textContent = localStorage.getItem(keyInput.value) ?? "Not found"; };
document.getElementById("remove").onclick = () => { localStorage.removeItem(keyInput.value); display(); };
document.getElementById("clear").onclick = () => { localStorage.clear(); display(); };
display();
