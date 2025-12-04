// Objekt që përmban të gjitha detajet për hapësirën CoWork Vushtrri
const spaceDetails = {
  id: "vushtrri1",
  name: "CoWork Vushtrri",
  city: "Vushtrri",
  image: "../images/office_images/vushtrri_office_3.jpg",
  description:
    "Modern coworking space in the heart of Vushtrri with flexible seating...",
  rating: 4.1,
  price: 80,
  features: [
    "High-Speed WiFi",
    "Meeting Room",
    "Flexible Seating",
    "24/7 Access",
    "Kitchen Facilities",
    "Coffee & Tea",
    "Parking Available"
  ]
};

// Funksion që vendos të gjitha të dhënat në elementet e HTML-it
function renderSpaceDetails() {

  // Marrim elementet që do t’i mbushim me të dhëna
  const heroImage = document.getElementById("space-hero-image");
  const heroName = document.getElementById("space-hero-name");
  const heroLocation = document.getElementById("space-hero-location");
  const heroRating = document.getElementById("space-hero-rating");
  const heroPrice = document.getElementById("space-hero-price");
  const spaceName = document.getElementById("space-name");
  const spaceLocation = document.getElementById("space-location");
  const spaceRating = document.getElementById("space-rating");
  const spaceDescription = document.getElementById("space-description");
  const spacePrice = document.getElementById("space-price");
  const spaceFeatures = document.getElementById("space-features");

  // Vendosim foton kryesore (hero image)
  if (heroImage) {
    const img = document.createElement("img");
    img.src = spaceDetails.image; // vendos linkun e fotos
    img.alt = spaceDetails.name;

    // Në rast se foto nuk ngarkohet → vendos një foto default
    img.onerror = function () {
      this.src = "../images/banner_img.jpg";
    };

    heroImage.appendChild(img);
  }

  // Vendos emrin e hapësirës në seksionin hero
  if (heroName) {
    heroName.textContent = spaceDetails.name;
  }

  // Vendos qytetin në seksionin hero
  if (heroLocation) {
    const locationSpan = heroLocation.querySelector("span");
    if (locationSpan) {
      locationSpan.textContent = spaceDetails.city;
    }
  }

  // Vendos rating-un në seksionin hero
  if (heroRating) {
    const ratingSpan = heroRating.querySelector("span");
    if (ratingSpan) {
      ratingSpan.textContent = spaceDetails.rating;
    }
  }

  // Vendos çmimin në seksionin hero
  if (heroPrice) {
    const priceAmount = heroPrice.querySelector(".price-amount");
    if (priceAmount) {
      priceAmount.textContent = `$${spaceDetails.price}`;
    }
  }

  // Vendos emrin e hapësirës në seksionin e plotë detajesh (poshtë)
  if (spaceName) {
    spaceName.textContent = spaceDetails.name;
  }

  // Vendos qytetin në seksionin e detajeve
  if (spaceLocation) {
    const locationSpan = spaceLocation.querySelector("span");
    if (locationSpan) {
      locationSpan.textContent = spaceDetails.city;
    }
  }

  // Vendos rating-un në seksionin e detajeve
  if (spaceRating) {
    const ratingSpan = spaceRating.querySelector("span");
    if (ratingSpan) {
      ratingSpan.textContent = spaceDetails.rating;
    }
  }

  // Vendos përshkrimin e hapësirës
  if (spaceDescription) {
    spaceDescription.textContent = spaceDetails.description;
  }

  // Vendos çmimin në seksionin e detajeve
  if (spacePrice) {
    spacePrice.textContent = `$${spaceDetails.price}`;
  }

  // Krijon listën dinamike me veçoritë (features)
  if (spaceFeatures) {
    spaceFeatures.innerHTML = ""; // pastrojmë listën ekzistuese

    // Për çdo veçori krijohet një element HTML dhe shtohet në listë
    spaceDetails.features.forEach((feature) => {
      const featureItem = document.createElement("div");
      featureItem.className = "space-feature-item";
      featureItem.innerHTML = `
        <i class="fa-solid fa-check"></i>
        <span>${feature}</span>
      `;
      spaceFeatures.appendChild(featureItem);
    });
  }
}

// Kur faqja ngarkohet plotësisht → thirr funksionin për të shfaqur detajet
document.addEventListener("DOMContentLoaded", function () {
  renderSpaceDetails();
});
