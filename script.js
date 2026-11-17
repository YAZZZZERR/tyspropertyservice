const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const desktopQuery = window.matchMedia("(min-width: 901px)");

function setMenu(isOpen) {
  nav.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
}

menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (nav.classList.contains("open") && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
    setMenu(false);
  }
});

desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const service = document.getElementById("customerService").value;
  const details = document.getElementById("customerDetails").value.trim();

  const message = `Hi Tys Property Service! My name is ${name}. I'm interested in: ${service}. Job details: ${details}`;
  const smsUrl = `sms:8139657570?&body=${encodeURIComponent(message)}`;
  document.getElementById("formMessage").textContent = "Your text message is ready. Review it in your messaging app, then press send.";
  window.location.href = smsUrl;
});
