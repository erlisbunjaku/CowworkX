// Array me të gjitha hapsirat e coworking që do të shfaqen në faqe
const spaces = [
  {
    id: "corworkspace1",
    name: "CoR Workspace",
    city: "Prishtina",
    image: "../images/office_images/prishtina_office_1.jpg",
    description:
      "Modern coworking space with private offices, meeting rooms, and fast internet.",
    rating: 4.8,
    price: 120,
    link: "#",
  },
  {
    id: "techhub1",
    name: "TechHub Prishtina",
    city: "Prishtina",
    image: "../images/office_images/prishtina_office_2.jpg",
    description:
      "Innovative workspace designed for tech startups and digital nomads.",
    rating: 4.9,
    price: 150,
    link: "#",
  },
  {
    id: "creative1",
    name: "Creative Space",
    city: "Prishtina",
    image: "../images/office_images/prishtina_office_3.jpg",
    description:
      "Inspiring environment for creatives and entrepreneurs with flexible seating options.",
    rating: 4.6,
    price: 110,
    link: "#",
  },
  {
    id: "prizren1",
    name: "Prizren Workspace",
    city: "Prizren",
    image: "../images/office_images/prizren_office_1.jpg",
    description:
      "Historic city center location with modern amenities and beautiful views.",
    rating: 4.7,
    price: 130,
    link: "#",
  },
  {
    id: "prizren2",
    name: "Riverside CoWork",
    city: "Prizren",
    image: "../images/office_images/prizren_office_2.jpg",
    description:
      "Peaceful workspace by the river, perfect for focused work and collaboration.",
    rating: 4.9,
    price: 145,
    link: "#",
  },
  {
    id: "peja1",
    name: "Peja Innovation Hub",
    city: "Peja",
    image: "../images/office_images/peja_office_1.jpg",
    description:
      "State-of-the-art facility for startups and established businesses.",
    rating: 4.8,
    price: 140,
    link: "#",
  },
  {
    id: "peja2",
    name: "Mountain View Workspace",
    city: "Peja",
    image: "../images/office_images/peja_office_2.jpg",
    description:
      "Scenic coworking space with mountain views and premium amenities.",
    rating: 4.6,
    price: 125,
    link: "#",
  },
  {
    id: "gjakova1",
    name: "Gjakova Business Center",
    city: "Gjakova",
    image: "../images/office_images/gjakova_office_1.jpg",
    description:
      "Professional workspace in the heart of Gjakova with meeting facilities.",
    rating: 4.5,
    price: 115,
    link: "#",
  },
  {
    id: "gjakova2",
    name: "Startup Space Gjakova",
    city: "Gjakova",
    image: "../images/office_images/gjakova_office_2.jpg",
    description:
      "Dynamic environment for startups and freelancers with networking opportunities.",
    rating: 4.4,
    price: 105,
    link: "#",
  },
  {
    id: "ferizaj1",
    name: "Ferizaj CoWork",
    city: "Ferizaj",
    image: "../images/office_images/ferizaj_office_1.jpg",
    description: "Modern coworking space with flexible plans and 24/7 access.",
    rating: 4.3,
    price: 95,
    link: "#",
  },
  {
    id: "ferizaj2",
    name: "Business Hub Ferizaj",
    city: "Ferizaj",
    image: "../images/office_images/ferizaj_office_2.jpg",
    description:
      "Professional workspace designed for business growth and collaboration.",
    rating: 4.5,
    price: 110,
    link: "#",
  },
  {
    id: "mitrovica1",
    name: "Mitrovica Workspace",
    city: "Mitrovica",
    image: "../images/office_images/mitrovica_office_1.jpg",
    description:
      "Comfortable coworking environment with high-speed internet and modern facilities.",
    rating: 4.2,
    price: 90,
    link: "#",
  },
  {
    id: "mitrovica2",
    name: "Innovation Lab Mitrovica",
    city: "Mitrovica",
    image: "../images/office_images/mitrovica_office_2.jpg",
    description:
      "Creative space for innovators and entrepreneurs with event hosting capabilities.",
    rating: 4.7,
    price: 135,
    link: "#",
  },
  {
    id: "gjilan1",
    name: "Gjilan CoWork Center",
    city: "Gjilan",
    image: "../images/office_images/gjilan_office_1.jpg",
    description:
      "Spacious workspace with private offices and shared areas for teams.",
    rating: 4.4,
    price: 100,
    link: "#",
  },
  {
    id: "gjilan2",
    name: "Tech Space Gjilan",
    city: "Gjilan",
    image: "../images/office_images/gjilan_office_2.jpg",
    description:
      "Modern facility tailored for tech professionals and remote workers.",
    rating: 4.8,
    price: 150,
    link: "#",
  },
  {
    id: "vushtrri1",
    name: "Vushtrri Workspace",
    city: "Vushtrri",
    image: "../images/office_images/vushtrri_office_1.jpg",
    description:
      "Modern coworking space in the heart of Vushtrri with flexible seating and meeting rooms.",
    rating: 4.3,
    price: 85,
    link: "./featured-spaces.html",
  },
  {
    id: "vushtrri2",
    name: "Unity Tech Hub Vushtrri",
    city: "Vushtrri",
    image: "../images/office_images/vushtrri_office_2.jpg",
    description:
      "Professional workspace designed for local businesses and entrepreneurs.",
    rating: 4.6,
    price: 70,
    link: "./featured-spaces2.html",
  },
  {
    id: "vushtrri3",
    name: "CoWork Vushtrri",
    city: "Vushtrri",
    image: "../images/office_images/vushtrri_office_3.jpg",
    description:
      "Comfortable and affordable workspace with high-speed internet and modern amenities.",
    rating: 4.1,
    price: 80,
    link: "./featured-spaces3.html",
  },
  {
    id: "podujeva1",
    name: "Podujeva Innovation Hub",
    city: "Podujeva",
    image: "../images/office_images/podujeva_office_1.jpg",
    description:
      "Innovative workspace for startups and creative professionals in Podujeva.",
    rating: 4.5,
    price: 115,
    link: "#",
  },
  {
    id: "podujeva2",
    name: "Podujeva Business Space",
    city: "Podujeva",
    image: "../images/office_images/podujeva_office_2.jpg",
    description:
      "Professional coworking environment with private offices and shared workspaces.",
    rating: 4.4,
    price: 105,
    link: "#",
  },
  {
    id: "suhareka1",
    name: "Suhareka Workspace",
    city: "Suhareka",
    image: "../images/office_images/suhareka_office_1.jpg",
    description:
      "Modern coworking space in Suhareka with flexible plans and 24/7 access.",
    rating: 4.2,
    price: 95,
    link: "#",
  },
  {
    id: "suhareka2",
    name: "Suhareka CoWork Center",
    city: "Suhareka",
    image: "../images/office_images/suhareka_office_2.jpg",
    description:
      "Spacious workspace perfect for teams and individual professionals.",
    rating: 4.5,
    price: 110,
    link: "#",
  },
  {
    id: "suhareka3",
    name: "Tech Hub Suhareka",
    city: "Suhareka",
    image: "../images/office_images/suhareka_office_3.jpg",
    description:
      "Tech-focused workspace with premium facilities and networking opportunities.",
    rating: 4.7,
    price: 140,
    link: "#",
  },
  {
    id: "lipjan1",
    name: "Lipjan Business Center",
    city: "Lipjan",
    image: "../images/office_images/lipjan_office_1.jpg",
    description:
      "Professional workspace in Lipjan with meeting rooms and modern facilities.",
    rating: 4.3,
    price: 100,
    link: "#",
  },
  {
    id: "lipjan2",
    name: "CoWork Lipjan",
    city: "Lipjan",
    image: "../images/office_images/lipjan_office_2.jpg",
    description:
      "Comfortable coworking space designed for productivity and collaboration.",
    rating: 4.4,
    price: 90,
    link: "#",
  },
  {
    id: "rahovec1",
    name: "Rahovec Workspace",
    city: "Rahovec",
    image: "../images/office_images/rahovec_office_1.jpg",
    description:
      "Modern coworking space in Rahovec with flexible seating and fast internet.",
    rating: 4.2,
    price: 85,
    link: "#",
  },
  {
    id: "rahovec2",
    name: "Rahovec Business Hub",
    city: "Rahovec",
    image: "../images/office_images/rahovec_office_2.jpg",
    description:
      "Professional workspace for businesses and entrepreneurs in Rahovec.",
    rating: 4.5,
    price: 115,
    link: "#",
  },
  {
    id: "rahovec3",
    name: "Innovation Space Rahovec",
    city: "Rahovec",
    image: "../images/office_images/rahovec_office_3.jpg",
    description:
      "Creative workspace for innovators and startups with event hosting capabilities.",
    rating: 4.6,
    price: 125,
    link: "#",
  },
];

// Funksion që shfaq kartat e coworking spaces në grid
function renderSpaces(filteredSpaces) {
  const spacesGrid = document.getElementById("spaces-grid"); // Div ku vendosen kartat
  const noSpacesMessage = document.getElementById("no-spaces-message"); // Mesazh kur nuk ka rezultate

  spacesGrid.innerHTML = ""; // Pastron grid-in para se të shtohen kartat e reja

  // Nëse nuk u gjet asnjë rezultat, shfaq mesazhin
  if (filteredSpaces.length === 0) {
    noSpacesMessage.style.display = "block";
    return;
  }

  // Fsheh mesazhin nëse ka rezultate
  noSpacesMessage.style.display = "none";

  // Loop për çdo coworking space dhe krijon kartën
  filteredSpaces.forEach((space) => {
    const spaceCard = document.createElement("div");
    spaceCard.className = "space-card";
    const rating = space.rating || 4.5;
    const price = space.price || 100;
     // HTML i kartës
    spaceCard.innerHTML = `
            <div class="space-card__image">
                <img src="${space.image}" alt="${space.name}" onerror="this.src='../images/banner_img.jpg'">
            </div>
            <div class="space-card__content">
                <div class="space-card__header">
                    <h3 class="space-card__name">${space.name}</h3>
                    <div class="space-card__meta">
                        <div class="space-card__location">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>${space.city}</span>
                        </div>
                        <div class="space-card__rating">
                            <i class="fa-solid fa-star"></i>
                            <span>${rating}</span>
                        </div>
                    </div>
                </div>
                <hr class="space-card__divider">
                <div class="space-card__footer">
                    <div class="space-card__price">
                        <span class="price-amount">$${price}</span>
                        <span class="price-period">/month</span>
                    </div>
                    <a href="${space.link}" class="space-card__button">View Details</a>
                </div>
            </div>
        `;
    spacesGrid.appendChild(spaceCard); // Shton kartën në grid
  });
}

// Funksion që filtron hapsirat sipas qytetit
function filterSpacesByCity(city) {
  const filtered = spaces.filter((space) => space.city === city); // Merr vetëm ato të qytetit të zgjedhur
  renderSpaces(filtered); // Shfaq ato në faqe
}

// Kur faqja ngarkohet
document.addEventListener("DOMContentLoaded", function () {
  const cityFilter = document.getElementById("city-filter"); // Dropdown për filtrimin e qyteteve

  filterSpacesByCity("Vushtrri"); // Qyteti default që shfaqet fillimisht

  // Ndryshon rezultatet sa herë përdoruesi zgjedh qytet tjetër
  cityFilter.addEventListener("change", function () {
    const selectedCity = this.value;
    filterSpacesByCity(selectedCity);
  });
});