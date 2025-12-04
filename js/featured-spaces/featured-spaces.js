// Objekt që përmban të gjitha të dhënat e hapësirës së coworking
const spaceDetails = {
  id: "vushtrri1",
  name: "Vushtrri Workspace",
  city: "Vushtrri",
  image: "../images/office_images/vushtrri_office_1.jpg",
  description:
    "Modern coworking space in the heart of Vushtrri with flexible seating and meeting rooms...",
  rating: 4.3,
  price: 85,
  features: [
    "High-Speed WiFi",
    "Meeting Rooms",
    "Flexible Seating",
    "24/7 Access",
    "Printing Services",
    "Kitchen Facilities",
    "Coffee & Tea",
    "Parking Available"
  ]
};

// Funksion që vendos të dhënat e hapësirës në HTML
function renderSpaceDetails() {
  // Marrim elementet ku do të vendosen të dhënat
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

  // Vendosim imazhin kryesor
  if (heroImage) {
    const img = document.createElement("img");
    img.src = spaceDetails.image; // vendos foto
    img.alt = spaceDetails.name;
    
    // Nëse foto nuk gjendet → vendos foto default
    img.onerror = function() {
      this.src = "../images/banner_img.jpg";
    };
    
    heroImage.appendChild(img);
  }

  // Vendos emrin kryesor të hapësirës
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

  // Vendos vlerësimin (rating)
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

  // Vendos emrin në seksionin tjetër
  if (spaceName) {
    spaceName.textContent = spaceDetails.name;
  }

  // Vendos qytetin në seksionin tjetër
  if (spaceLocation) {
    const locationSpan = spaceLocation.querySelector("span");
    if (locationSpan) {
      locationSpan.textContent = spaceDetails.city;
    }
  }

  // Vendos rating-un në seksionin tjetër
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

  // Rendero listën e veçorive (features)
  if (spaceFeatures) {
    spaceFeatures.innerHTML = ""; // pastro listën
    
    // Për secilën veçori krijo një element dhe shtoje në listë
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

// Kur faqja ngarkohet → ekzekuto funksionin
document.addEventListener("DOMContentLoaded", function () {
  renderSpaceDetails();
});
