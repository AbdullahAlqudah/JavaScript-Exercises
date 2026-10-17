function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}
function getCookie(name) {
  const cookie = document.cookie.split("; ").find(item => item.startsWith(encodeURIComponent(name) + "="));
  return cookie ? decodeURIComponent(cookie.substring(cookie.indexOf("=") + 1)) : null;
}
function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}
function applyPreferences() {
  const theme = getCookie("theme") === "dark" ? "dark" : "light";
  const language = getCookie("language") === "ar" ? "ar" : "en";
  document.getElementById("theme").value = theme;
  document.getElementById("language").value = language;
  document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
  document.body.style.color = theme === "dark" ? "#fff" : "#111";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.getElementById("heading").textContent = language === "ar" ? "التفضيلات" : "Preferences";
  document.getElementById("current").textContent = language === "ar" ? `المظهر: ${theme}، اللغة: ${language}` : `Theme: ${theme}, Language: ${language}`;
}
document.getElementById("save").onclick = () => {
  setCookie("theme", document.getElementById("theme").value, 30);
  setCookie("language", document.getElementById("language").value, 30);
  applyPreferences();
};
document.getElementById("delete").onclick = () => {
  deleteCookie("theme");
  deleteCookie("language");
  applyPreferences();
};
applyPreferences();
