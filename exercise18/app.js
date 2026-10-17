const fields = ["name", "email", "university", "major"];
let data;
try { data = JSON.parse(sessionStorage.getItem("registration")) || {}; } catch { data = {}; }
let step = Number(sessionStorage.getItem("step")) || 1;
if (step < 1 || step > 3) step = 1;
fields.forEach(field => { document.getElementById(field).value = data[field] || ""; });
function save() {
  fields.forEach(field => { data[field] = document.getElementById(field).value; });
  sessionStorage.setItem("registration", JSON.stringify(data));
  sessionStorage.setItem("step", String(step));
}
function render() {
  for (let i = 1; i <= 3; i++) document.getElementById(`step${i}`).hidden = i !== step;
  document.getElementById("back").disabled = step === 1;
  document.getElementById("next").textContent = step === 3 ? "Confirm" : "Next";
  document.getElementById("review").textContent = JSON.stringify(data, null, 2);
}
fields.forEach(field => document.getElementById(field).addEventListener("input", save));
document.getElementById("back").onclick = () => { save(); if (step > 1) step--; save(); render(); };
document.getElementById("next").onclick = () => {
  save();
  const required = step === 1 ? ["name", "email"] : step === 2 ? ["university", "major"] : [];
  if (required.some(field => !data[field].trim())) { document.getElementById("message").textContent = "Fill in all fields"; return; }
  document.getElementById("message").textContent = "";
  if (step === 3) {
    document.getElementById("message").textContent = "Registration confirmed";
    sessionStorage.removeItem("registration");
    sessionStorage.removeItem("step");
    return;
  }
  step++;
  save();
  render();
};
render();
