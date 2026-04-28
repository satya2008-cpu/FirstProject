// auth.js - Shared auth for login and main pages
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = localStorage.getItem('currentUser') || null;

function isLoggedIn() {
  return !!currentUser;
}

function getCurrentUserName() {
  const currentEmail = localStorage.getItem('currentUser');
  if (!currentEmail) return '';
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === currentEmail);
  return user ? user.name || currentEmail : currentEmail;
}

function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentUserName');
  location.href = 'ultimate-login.html';
}

function initAuthNav() {
  const navUl = document.querySelector('nav ul');
  if (navUl) {
    if (isLoggedIn()) {
      navUl.innerHTML = navUl.innerHTML.replace(/<\/li>$/, '') + `<li><a href="#" onclick="logout()" class="logout-link">Logout</a></li>`;
      const intro = document.querySelector('.intro');
      if (intro) {
        intro.textContent = `Welcome ${getCurrentUserName()}!`;
      }
    }
  }
}

// Load on DOM ready
document.addEventListener('DOMContentLoaded', initAuthNav);

