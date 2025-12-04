/**
 * Merr array-n e përdoruesve nga localStorage
 * @returns {Array}
 */
function getUsers() {
  try {
    const usersJson = localStorage.getItem("users");

    if (!usersJson) {
      return [];
    }

    return JSON.parse(usersJson);
  } catch (error) {
    console.error("Error reading users from localStorage:", error);
    return [];
  }
}

/**
 *  Ruaj array-n e përdoruesve në localStorage
 * @param {Array} users
 */
function saveUsers(users) {
  try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error("Error saving users to localStorage:", error);
  }
}

/**
 *  Pastron të gjitha mesazhet e gabimeve në një form
 * @param {string} formId
 */
function clearErrors(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  // Pastron span-et me klasën "error"
  const errorSpans = form.querySelectorAll(".error");
  errorSpans.forEach((span) => {
    span.textContent = "";
  });

  // Pastron div-et e mesazheve (success/error)
  const messageDivs = form.parentElement.querySelectorAll('[id$="-message"]');
  messageDivs.forEach((div) => {
    div.textContent = "";
    div.className = "";
  });
}

/**
 * Shfaq gabim tek një element specifik
 * @param {string} elementId – id e elementit ku do të shfaqet gabimi
 * @param {string} message – mesazhi i gabimit që do të shfaqet
 */
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) errorElement.textContent = message;
}

/**
 * Shfaq mesazh sukses/gabimi në një div
 * @param {string} messageId – id e div-it
 * @param {string} message – mesazhi që do të shfaqet
 * @param {string} type – tip i mesazhit, 'success' ose 'error' (default: 'error')
 */
function showMessage(messageId, message, type = "error") {
  const messageElement = document.getElementById(messageId);
  if (messageElement) {
    messageElement.textContent = message;
    messageElement.className = type === "success" ? "success" : "error";
  }
}

/**
 * Kontrollon nëse email-i ka format të saktë
 * @param {string} email – email-i që do të verifikohet
 * @returns {boolean} – kthen true nëse email-i është i saktë, false në të kundërt
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Kontrollon nëse password-i ka të paktën 6 karaktere
 * @param {string} password – password-i që do të kontrollohet
 * @returns {boolean} – true nëse është i vlefshëm, false në të kundërt
 */
function isValidPassword(password) {
  return password.length >= 6;
}

// SIGNUP 
function handleSignup() {
  const signupForm = document.getElementById("signup-form");
  if (!signupForm) return;

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ndalon dërgimin e form-it normal

    clearErrors("signup-form"); // pastron gabimet e mëparshme

    // Merr të dhënat nga forma
    const name = document.getElementById("signup-name").value.trim();
    const email = document
      .getElementById("signup-email")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    let isValid = true;

    // Validime për emrin
    if (!name) {
      showError("name-error", "Name is required");
      isValid = false;
    } else if (name.length < 2) {
      showError("name-error", "Name must be at least 2 characters");
      isValid = false;
    }

    // Validime për email
    if (!email) {
      showError("email-error", "Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError("email-error", "Please enter a valid email address");
      isValid = false;
    }

    // Validime për password
    if (!password) {
      showError("password-error", "Password is required");
      isValid = false;
    } else if (!isValidPassword(password)) {
      showError("password-error", "Password must be at least 6 characters");
      isValid = false;
    }

    // Validime për confirm password
    if (!confirmPassword) {
      showError("confirm-password-error", "Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      showError("confirm-password-error", "Passwords do not match");
      isValid = false;
    }

    if (!isValid) return;

    const users = getUsers(); // merr përdoruesit ekzistues

    // Kontrollon nëse email-i ekziston
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      showMessage(
        "signup-message",
        "An account with this email already exists. Please log in instead.",
        "error"
      );
      return;
    }

    // Shton përdoruesin e ri në array
    const newUser = { name, email, password };
    users.push(newUser);

    saveUsers(users); // ruan array-n në localStorage

    showMessage(
      "signup-message",
      "Account created successfully! Redirecting to login...",
      "success"
    );

    // Redirect pas 1.5 sekondash
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
}

// LOGIN 

function handleLogin() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors('login-form');

        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;

        let isValid = true;

        if (!email) { showError('login-email-error', 'Email is required'); isValid = false; }
        else if (!isValidEmail(email)) { showError('login-email-error', 'Please enter a valid email address'); isValid = false; }

        if (!password) { showError('login-password-error', 'Password is required'); isValid = false; }

        if (!isValid) return;

        const users = getUsers();

        if (users.length === 0) { showMessage('login-message', 'No users found. Please sign up first.', 'error'); return; }

        const user = users.find(u => u.email === email);

        if (!user || user.password !== password) {
            showMessage('login-message', 'Invalid email or password', 'error');
            return;
        }

        showMessage('login-message', 'Login successful! Redirecting...', 'success');

        setTimeout(() => { window.location.href = './pages/home.html'; }, 1000);
    });
}

// INITIALIZE ON PAGE LOAD
//zbulon se cilën faqe ke hapur (signup apo login) dhe pastaj ekzekuton funksionin e duhur.
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('signup-form')) handleSignup();
    if (document.getElementById('login-form')) handleLogin();
});