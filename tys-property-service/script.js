
// ==========================================
// TYS PROPERTY SERVICE — WEBSITE JAVASCRIPT
// ==========================================

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const desktopQuery = window.matchMedia("(min-width: 901px)");

function setMenu(isOpen) {
  if (!nav || !menuToggle) return;

  nav.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuToggle.textContent = isOpen ? "×" : "☰";
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    setMenu(!nav.classList.contains("open"));
  });

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
    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenu(false);
    }
  });

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });
}

// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// QUOTE REQUEST FORM
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
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
    const formMessage = document.getElementById("formMessage");

    if (formMessage) {
      formMessage.textContent =
        "Your text is ready to review in your messaging app. Press send when you're ready.";
    }

    window.location.href = smsUrl;
  });
}

// ==========================================
// GALLERY PHOTOS
// ==========================================

const galleryPhotos = [
  { src: "assets/ty prop image 1.jpg", alt: "TYS Property Service project 1", caption: "Property Service" },
  { src: "assets/ty prop image 2.jpg", alt: "TYS Property Service project 2", caption: "Property Maintenance" },
  { src: "assets/ty prop image 3.jpg", alt: "TYS Property Service project 3", caption: "Lawn Care" },
  { src: "assets/ty prop image 4.jpg", alt: "TYS Property Service project 4", caption: "Outdoor Projects" },
  { src: "assets/ty prop image 5.jpg", alt: "TYS Property Service project 5", caption: "Landscaping" },
  { src: "assets/ty prop image 6.jpg", alt: "TYS Property Service project 6", caption: "Mulch Installation" },
  { src: "assets/ty prop image 7.jpg", alt: "TYS Property Service project 7", caption: "Residential Lawn Care" }
];

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("lightboxClose");

if (galleryGrid) {
  galleryPhotos.forEach((photo) => {
    const item = document.createElement("button");
    item.className = "gallery-item";
    item.type = "button";

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = "lazy";

    const caption = document.createElement("span");
    caption.className = "gallery-caption";
    caption.textContent = photo.caption;

    item.appendChild(img);
    item.appendChild(caption);
    galleryGrid.appendChild(item);

    if (lightbox && lightboxImage) {
      item.addEventListener("click", () => {
        lightboxImage.src = photo.src;
        lightboxImage.alt = photo.alt;
        lightbox.classList.add("active");
      });
    }
  });
}

// LIGHTBOX
function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("active");
  lightboxImage.src = "";
}

if (closeButton) {
  closeButton.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}
