# College Desk

College Desk is a client-side educational resource website for college students. It brings together beginner-friendly HTML, CSS, and JavaScript documentation links and tutorial videos in one responsive interface, with a demo login/signup flow, a contact form, and a shared navigation layout.

> **Status:** This is a front-end demo. Authentication and contact submission are implemented with browser-side JavaScript only; no backend or database is included.

## Features

- Landing page with an overview of the College Desk resource hub
- Topic-based learning resources for:
  - HTML
  - CSS
  - JavaScript
- Links to MDN documentation and curated YouTube tutorials
- Responsive layouts for desktop and mobile screens
- Demo sign-up and login forms
- Demo password-reset flow
- Session-like login state stored in `localStorage`
- Personalized welcome message and logout navigation
- Contact form with demo feedback behavior
- Animated and themed UI using CSS transitions, gradients, shadows, and responsive styling

## Pages and navigation

| Page | File | Purpose |
| --- | --- | --- |
| Login / signup | `ultimate-login.html` | Creates users, signs users in, and provides the demo password-reset flow. |
| Home | `index.html` | Introduces College Desk and links to the learning topics. |
| Resources | `resources.html` | Displays HTML, CSS, and JavaScript explanations and video links. |
| Contact | `contact.html` | Collects a name, email, and message in a front-end demo form. |

## Project structure

```text
.
├── ultimate-login.html  # Login and signup interface; stores demo users in localStorage
├── index.html           # College Desk home page
├── resources.html       # HTML, CSS, and JavaScript learning resources
├── contact.html         # Contact form demo
├── auth.js              # Shared login-state, welcome-message, and logout behavior
├── animations.js        # Optional contact-form animation/feedback handler
├── style.css            # Main page and contact-page styles
├── style2.css           # Resource-page styles and topic-tab presentation
├── image2.jpg           # Background image used throughout the site
└── README.md
```

## How it works

`ultimate-login.html` keeps a list of demo users in browser `localStorage` under `users` and records the active email under `currentUser`. After signup or login, the user is redirected to `index.html`. The shared `auth.js` script runs on the main pages, updates the navigation with a logout link, and personalizes the home-page greeting.

The resource page uses CSS-only topic selection: radio inputs and sibling selectors in `style2.css` show the selected HTML, CSS, or JavaScript content section. The contact page prevents a real submission and displays a thank-you alert, so messages are not sent to a server.

## Run locally

No build step or package installation is required. The project is made of static HTML, CSS, JavaScript, and image files.

### Option 1: Open directly

Open `ultimate-login.html` in a modern browser.

### Option 2: Use a local static server

From the repository root, run one of the following:

```bash
# Python 3
python3 -m http.server 8000
```

Then open <http://localhost:8000/ultimate-login.html>.

If you use VS Code, the Live Server extension can also serve the repository root.

## Demo usage

1. Open `ultimate-login.html`.
2. Select **Sign Up** and create an account using a password with at least six characters.
3. After signup, explore the home page and the **Resources** page.
4. Use **Contact** to try the demo contact form.
5. Use **Logout** in the navigation to return to the login page.

To clear the demo account data, open the browser developer console and run:

```js
localStorage.clear()
```

## Technology

- HTML5
- CSS3, including responsive media queries, transitions, gradients, and CSS-only resource tabs
- Vanilla JavaScript
- Browser `localStorage`
- Google Fonts: Montserrat and Ms Madi
- External MDN and YouTube resource links

## Important security note

This project is suitable for learning and front-end demonstrations only. Passwords are stored as plain text in `localStorage`, and there is no server-side authentication, password hashing, authorization, or secure password recovery. Do not use real passwords or personal information with this demo. A production version should use a backend authentication service, hashed passwords, HTTPS, server-side validation, and a real contact endpoint.

## Future improvements

- Add a backend for authentication and contact-message delivery
- Hash passwords and replace `localStorage` authentication with secure sessions
- Add form validation and accessible error messaging
- Move inline styles and scripts into dedicated files
- Add automated tests and a deployment workflow
- Add more subjects, search, filtering, and progress tracking
