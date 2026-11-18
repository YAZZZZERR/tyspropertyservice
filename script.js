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
const galleryPhotos = [
  { src: "assets/ty-property-01.jpg", alt: "TYS Property Service project 1" },
  { src: "assets/ty-property-02.jpg", alt: "TYS Property Service project 2" },
  { src: "assets/ty-property-03.jpg", alt: "TYS Property Service project 3" },
  { src: "assets/ty-property-04.jpg", alt: "TYS Property Service project 4" },
  { src: "assets/ty-property-05.jpeg", alt: "Fresh mulch and stone landscape edging" },
  { src: "assets/ty-property-06.jpeg", alt: "Mulch bed and landscaping along home" },
  { src: "assets/ty-property-07.jpeg", alt: "Maintained residential lawn and landscaping" }
];

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("lightboxClose");

galleryPhotos.forEach((photo) => {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.alt;
  img.loading = "lazy";

  item.appendChild(img);
  galleryGrid.appendChild(item);

  item.addEventListener("click", () => {
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;
    lightbox.classList.add("active");
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
];

const galleryPhotos = [
  { src: "assets/ty prop image 1.jpg", alt: "TYS Property Service project 1" },
  { src: "assets/ty prop image 2.jpg", alt: "TYS Property Service project 2" },
  { src: "assets/ty prop image 3.jpg", alt: "TYS Property Service project 3" },
  { src: "assets/ty prop image 4.jpg", alt: "TYS Property Service project 4" },
  { src: "assets/ty prop image 5.jpg", alt: "TYS Property Service project 5" },
  { src: "assets/ty prop image 6.jpg", alt: "TYS Property Service project 6" },
  { src: "assets/ty prop image 7.jpg", alt: "TYS Property Service project 7" }
];
function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
