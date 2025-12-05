// Objekt që përmban të gjitha të dhënat për hapësirën e coworking në Prishtine
const spaceDetails = {
  id: "peja2",
  name: "Mountain View Workspace",
  city: "Peja",
  image: "../images/office_images/peja_office_2.jpg",
  description:
    "Peja Workspace is a modern, community-focused coworking hub designed for freelancers, entrepreneurs, and small teams who want a productive and inspiring place to work. With flexible desks, private meeting rooms, and fast WiFi, it offers everything you need to stay focused and get things done.",
  rating: 4.6,
  price: 125,
  features: [
    "High-Speed WiFi",
    "Meeting Room",
    "Flexible Seating",
    "24/7 Access",
    "Parking Available"
  ]
};

// Funksion që vendos të dhënat në elementet e HTML-it
function renderSpaceDetails() {

  // Marrim elementet ku do të shfaqen informacionet
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

  // Vendosim foton kryesore
  if (heroImage) {
    const img = document.createElement("img");
    img.src = spaceDetails.image;
    img.alt = spaceDetails.name;

    // Nëse foto nuk ngarkohet → vendos foto default
    img.onerror = function () {
      this.src = "../images/banner_img.jpg";
    };

    heroImage.appendChild(img);
  }

  // Vendos emrin e hapësirës në seksionin hero
  if (heroName) {
    heroName.textContent = spaceDetails.name;
  }

  // Vendos qytetin në seksionin e sipërm
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

  // Vendos emrin e hapësirës në seksionin e poshtëm
  if (spaceName) {
    spaceName.textContent = spaceDetails.name;
  }

  // Vendos qytetin në seksionin e poshtëm
  if (spaceLocation) {
    const locationSpan = spaceLocation.querySelector("span");
    if (locationSpan) {
      locationSpan.textContent = spaceDetails.city;
    }
  }

  // Vendos rating-un në seksionin e poshtëm
  if (spaceRating) {
    const ratingSpan = spaceRating.querySelector("span");
    if (ratingSpan) {
      ratingSpan.textContent = spaceDetails.rating;
    }
  }

  // Vendos përshkrimin
  if (spaceDescription) {
    spaceDescription.textContent = spaceDetails.description;
  }

  // Vendos çmimin
  if (spacePrice) {
    spacePrice.textContent = `$${spaceDetails.price}`;
  }

  // Krijon dhe shfaq listën e veçorive (features)
  if (spaceFeatures) {
    spaceFeatures.innerHTML = ""; // pastrojmë listën ekzistuese

    // Për secilën veçori krijojmë një element HTML
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

// Kur faqja të jetë ngarkuar → thirr funksionin për të shfaqur detajet
document.addEventListener("DOMContentLoaded", function () {
  renderSpaceDetails();
});
