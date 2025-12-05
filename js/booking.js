// Simple booking page JavaScript

// Merr ID e hapësirës nga URL-ja (p.sh. ?id=vushtrri1)
let spaceId = "";
// URLSearchParams na lejon të lexojmë parametra nga URL-ja
const urlParams = new URLSearchParams(window.location.search);
spaceId = urlParams.get("id");// merr vlerën e parametrit "id"

// Nëse nuk ka ID, kthehu te faqja e hapësirave
if (!spaceId) {
  alert("A booking already exists. Returning to the spaces page.");
  window.location.href = "./spaces.html";
}

// Gjej hapësirën nga array "spaces"
let selectedSpace = null;
if (typeof spaces !== 'undefined') {
  for (let i = 0; i < spaces.length; i++) {
    if (spaces[i].id === spaceId) {
      selectedSpace = spaces[i];
      break; // ndalon loop sapo të gjejë hapësirën e duhur
    }
  }
}

// Ensure we have a selected space before continuing
if (!selectedSpace) {
  console.error(`Space with id="${spaceId}" not found in spaces array.`);
  const titleEl = document.getElementById("booking-space-name");
  if (titleEl) titleEl.textContent = "Space not found";
  alert('Space not found. Returning to the spaces listing.');
  window.location.href = "./spaces.html";
} else {
  // Vendos sot si datë minimale për rezervim
  const today = new Date();
  const todayString = today.getFullYear() + "-" +
                     String(today.getMonth() + 1).padStart(2, "0") + "-" +
                     String(today.getDate()).padStart(2, "0");
  document.getElementById("booking-date").setAttribute("min", todayString);

  // Shfaq informacionin e hapësirës në faqe
  document.getElementById("booking-space-name").textContent = selectedSpace.name;
  document.getElementById("summary-name").textContent = selectedSpace.name;
  document.getElementById("summary-location").querySelector("span").textContent = selectedSpace.city;
  document.getElementById("summary-rating").querySelector("span").textContent = selectedSpace.rating;

  // Shton imazhin e hapësirës në faqe
  const img = document.createElement("img");
  img.src = selectedSpace.image;
  img.alt = selectedSpace.name;
  img.onerror = function() {
    // Nëse imazhi nuk ngarkohet, vendos foto fallback
    this.src = "../images/banner_img.jpg";
  };
  document.getElementById("summary-image").appendChild(img);

// Funksion që përditëson përmbledhjen kur ndryshohen input-et
function updateSummary() {
  // Merr vlerat e formës
  const date = document.getElementById("booking-date").value;
  const time = document.getElementById("booking-time").value;
  const people = document.getElementById("booking-people").value;
  const duration = document.getElementById("booking-duration").value;

  // Përditëso datën
  if (date) {
    const dateObj = new Date(date);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById("summary-date").textContent = dateObj.toLocaleDateString("en-US", options);
  } else {
    document.getElementById("summary-date").textContent = "-";
  }

  // Përditëso orarin në përmbledhje
  if (time === "09:00") {
    document.getElementById("summary-time").textContent = "9:00 AM - 12:00 PM";
  } else if (time === "12:00") {
    document.getElementById("summary-time").textContent = "12:00 PM - 3:00 PM";
  } else if (time === "15:00") {
    document.getElementById("summary-time").textContent = "3:00 PM - 6:00 PM";
  } else if (time === "18:00") {
    document.getElementById("summary-time").textContent = "6:00 PM - 9:00 PM";
  } else if (time === "full-day") {
    document.getElementById("summary-time").textContent = "Full Day (9:00 AM - 9:00 PM)";
  } else {
    document.getElementById("summary-time").textContent = "-";
  }

  // Përditëso numrin e personave
  document.getElementById("summary-people").textContent = people || "-";
  document.getElementById("summary-people-count").textContent = people || "1";

  // Përditëso kohëzgjatjen
  if (duration === "daily") {
    document.getElementById("summary-duration").textContent = "Daily";
  } else if (duration === "weekly") {
    document.getElementById("summary-duration").textContent = "Weekly";
  } else if (duration === "monthly") {
    document.getElementById("summary-duration").textContent = "Monthly";
  } else {
    document.getElementById("summary-duration").textContent = "-";
  }

  calculatePrice();
}

// Funksion që llogarit çmimin total
function calculatePrice() {
  // Merr vlerat e formës
  const duration = document.getElementById("booking-duration").value;
  const time = document.getElementById("booking-time").value;
  const people = parseInt(document.getElementById("booking-people").value) || 1;

  // Merr çmimin mujor të hapësirës
  const monthlyPrice = selectedSpace.price;
  let basePrice = 0;

  // Llogarit çmimin bazë sipas llojit të rezervimit
  if (duration === "daily") {
    basePrice = monthlyPrice * 0.1; // Ditor është 10% e cmimit mujor
    
    // Nëse ka zgjedhur slot të caktuar orarësh
    if (time === "09:00" || time === "12:00" || time === "15:00" || time === "18:00") {
      basePrice = basePrice * 0.25; // Çdo slot është 25% e çmimit ditor
    }
  } else if (duration === "weekly") {
    basePrice = monthlyPrice * 0.25; // Java është 25% e muajit
  } else if (duration === "monthly") {
    basePrice = monthlyPrice; // Mujor është 100%
  }

  // Çmimi total (cmimi bazë * nr. personave)
  const totalPrice = basePrice * people;

  // Shfaq çmimet në përmbledhje
  document.getElementById("summary-base-price").textContent = "$" + basePrice.toFixed(2);

  if (people > 1) {
    const extraPeoplePrice = basePrice * (people - 1);
    // Çmimi shtesë për personat ekstra
    document.getElementById("summary-people-price").textContent = "+$" + extraPeoplePrice.toFixed(2);
  } else {
    document.getElementById("summary-people-price").textContent = "$0.00";
  }

  document.getElementById("summary-total-price").textContent = "$" + totalPrice.toFixed(2);
}

// Event listeners për përditësim përmbledhjeje
document.getElementById("booking-date").addEventListener("change", updateSummary);
document.getElementById("booking-time").addEventListener("change", updateSummary);
document.getElementById("booking-people").addEventListener("input", updateSummary);
document.getElementById("booking-duration").addEventListener("change", updateSummary);

// Kur forma dërgohet
document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Parandalon submit normal të formës

  // Merr vlerat e formës
  const date = document.getElementById("booking-date").value;
  const time = document.getElementById("booking-time").value;
  const people = document.getElementById("booking-people").value;
  const duration = document.getElementById("booking-duration").value;

  // Kontrollon nëse mungon ndonjë input
  let hasError = false;

  // Verifikon datën
  if (!date) {
    document.getElementById("date-error").textContent = "Please select a date";
    document.getElementById("date-error").classList.add("show");
    hasError = true;
  } else {
    document.getElementById("date-error").classList.remove("show");
  }

  // Verifikon orarin
  if (!time) {
    document.getElementById("time-error").textContent = "Please select a time slot";
    document.getElementById("time-error").classList.add("show");
    hasError = true;
  } else {
    document.getElementById("time-error").classList.remove("show");
  }

  // Verifikon numrin e personave
  if (!people || people < 1) {
    document.getElementById("people-error").textContent = "Please enter number of people (minimum 1)";
    document.getElementById("people-error").classList.add("show");
    hasError = true;
  } else if (people > 20) {
    document.getElementById("people-error").textContent = "Maximum 20 people allowed";
    document.getElementById("people-error").classList.add("show");
    hasError = true;
  } else {
    document.getElementById("people-error").classList.remove("show");
  }

  // Verifikon kohëzgjatjen
  if (!duration) {
    document.getElementById("duration-error").textContent = "Please select a duration";
    document.getElementById("duration-error").classList.add("show");
    hasError = true;
  } else {
    document.getElementById("duration-error").classList.remove("show");
  }

  // Nëse ka gabime, ndalon ekzekutimin
  if (hasError) {
    return;
  }

  // Llogarit çmimin final si në përmbledhje
  let finalPrice = 0;
  const monthlyPrice = selectedSpace.price;
  let basePrice = 0;

  if (duration === "daily") {
    basePrice = monthlyPrice * 0.1;
    if (time === "09:00" || time === "12:00" || time === "15:00" || time === "18:00") {
      basePrice = basePrice * 0.25;
    }
  } else if (duration === "weekly") {
    basePrice = monthlyPrice * 0.25;
  } else if (duration === "monthly") {
    basePrice = monthlyPrice;
  }

  finalPrice = basePrice * parseInt(people);

  // Krijon objektin e rezervimit
  const booking = {
    spaceId: selectedSpace.id,
    spaceName: selectedSpace.name,
    date: date,
    time: time,
    people: parseInt(people),
    duration: duration,
    totalPrice: finalPrice
  };

  // Merr rezervimet ekzistuese ose krijon një array të ri
  let bookings = [];
  if (localStorage.getItem("bookings")) {
    bookings = JSON.parse(localStorage.getItem("bookings"));
  }

  // Shton rezervimin e ri
  bookings.push(booking);

  // Ruaj i rezervimet në localStorage
  localStorage.setItem("bookings", JSON.stringify(bookings));

  // Shfaq mesazh suksesi dhe kthehu te faqja e hapësirave
  alert("Booking confirmed! Redirecting to summary page...");
  window.location.href = "./spaces.html";
});

  // Llogarit çmimin sapo faqja të ngarkohet
  calculatePrice();

} // end else (selectedSpace)
