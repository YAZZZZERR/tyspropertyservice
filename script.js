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
  if (nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)) {
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
  const phone = document.getElementById("customerPhone").value.trim();
  const location = document.getElementById("customerLocation").value.trim();
  const service = document.getElementById("customerService").value;
  const details = document.getElementById("customerDetails").value.trim();

  const message = [
    "Hi TYS Property Service!",
    `My name is ${name}.`,
    phone ? `My phone number is ${phone}.` : "",
    location ? `Job location: ${location}.` : "",
    `I'm interested in: ${service}.`,
    `Job details: ${details}`
  ].filter(Boolean).join(" ");

  const smsUrl = `sms:8139657570?&body=${encodeURIComponent(message)}`;
  document.getElementById("formMessage").textContent =
    "Your text is ready to review in your messaging app. Press send when you're ready.";
  window.location.href = smsUrl;
});
