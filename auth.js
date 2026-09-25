// auth.js - Shared auth for login and main pages
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = localStorage.getItem('currentUser') || null;

function isLoggedIn() {
  return !!currentUser;
}

function getCurrentUserName() {
  const currentEmail = localStorage.getItem('currentUser');
  if (!currentEmail) return '';
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = storedUsers.find(u => u.email === currentEmail);
  return user ? user.name || currentEmail : currentEmail;
}

function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentUserName');
  location.href = 'ultimate-login.html';
}

function initAuthNav() {
  const navUl = document.querySelector('nav ul');
  const isHomePage = location.pathname.endsWith('/') || location.pathname.endsWith('/index.html');

  // The public site URL opens the login page for visitors who are not signed in.
  if (!isLoggedIn() && isHomePage) {
    location.replace('ultimate-login.html');
    return;
  }

  if (navUl && isLoggedIn()) {
    navUl.innerHTML += `<li><a href="#" onclick="logout(); return false;" class="logout-link">Logout</a></li>`;
    const intro = document.querySelector('.intro');
    if (intro) intro.textContent = `Welcome ${getCurrentUserName()}!`;
  }
}

document.addEventListener('DOMContentLoaded', initAuthNav);
