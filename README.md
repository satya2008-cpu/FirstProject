# College Desk

College Desk is a client-side educational resource platform designed to help college students access introductory web-development materials in one place. The application provides curated documentation and tutorial links for HTML, CSS, and JavaScript through a responsive, modern user interface.

> **Project status:** College Desk is a front-end demonstration project. Authentication, password recovery, and contact submission are simulated in the browser using JavaScript and `localStorage`. The project does not include a backend, database, or production-grade authentication system.

## Overview

The application offers a simple learning-resource hub with the following primary areas:

- A landing page introducing the platform
- Topic-based educational resources for HTML, CSS, and JavaScript
- Links to selected MDN Web Docs pages and YouTube tutorials
- Demo account registration and login functionality
- A browser-based password-reset demonstration
- Personalized login state and navigation behavior
- A front-end contact form with demonstration feedback
- Responsive layouts for desktop, tablet, and mobile devices
- Modern visual styling with gradients, glassmorphism effects, transitions, shadows, and hover states

## Application pages

| Page | File | Description |
| --- | --- | --- |
| Login and registration | `ultimate-login.html` | Provides demo account creation, login, and password-reset functionality. |
| Home | `index.html` | Introduces College Desk and provides links to the learning topics. |
| Resources | `resources.html` | Presents explanations, documentation links, and tutorial videos for HTML, CSS, and JavaScript. |
| Contact | `contact.html` | Provides a front-end contact form for demonstration purposes. |

## Project structure

```text
.
├── ultimate-login.html  # Login, registration, and password-reset interface
├── index.html           # College Desk landing page
├── resources.html       # HTML, CSS, and JavaScript learning resources
├── contact.html         # Demonstration contact form
├── auth.js              # Shared login-state, welcome-message, and logout behavior
├── animations.js        # Optional contact-form animation and feedback behavior
├── style.css            # Shared styles for the home and contact pages
├── style2.css           # Styles for the resources page and topic tabs
├── image2.jpg           # Background image used throughout the website
└── README.md            # Project documentation
```

## Functional behavior

### Authentication demonstration

`ultimate-login.html` stores demo user records in the browser's `localStorage` under the `users` key. The email address of the currently active user is stored under `currentUser`. After a successful registration or login, the user is redirected to `index.html`.

The shared `auth.js` file uses the stored login state to provide personalized navigation behavior, display a welcome message, and support logout.

### Resource navigation

The resources page uses CSS-only topic selection. Hidden radio inputs and sibling selectors in `style2.css` control the visibility of the HTML, CSS, and JavaScript sections without requiring additional JavaScript logic.

### Contact form

The contact form prevents a real network submission and displays demonstration feedback in the browser. No contact messages are sent to a server or stored in a database.

## Local development

The project is composed of static HTML, CSS, JavaScript, and image files. No build process, package manager, or dependency installation is required.

### Option 1: Open the project directly

Open `ultimate-login.html` in a modern web browser.

### Option 2: Use a local static server

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open the following address in your browser:

<http://localhost:8000/ultimate-login.html>

Alternatively, the repository can be served using the Live Server extension in Visual Studio Code.

## Demonstration workflow

1. Open `ultimate-login.html`.
2. Select **Sign Up** and create a demo account with a password of at least six characters.
3. Explore the home page after registration.
4. Open the **Resources** page and select a topic.
5. Use the **Contact** page to test the demonstration form.
6. Select **Logout** to return to the login page.

To remove all demonstration account data, open the browser developer console and run:

```js
localStorage.clear();
```

## Technologies and resources

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`
- Responsive media queries
- CSS transitions and animations
- CSS gradients and glassmorphism styling
- Google Fonts: DM Sans and Space Grotesk
- MDN Web Docs
- YouTube tutorial resources

## Security and privacy notice

This project is intended for educational and front-end demonstration purposes only. It must not be used as a production authentication system.

The current implementation has the following limitations:

- Passwords are stored as plain text in `localStorage`.
- Authentication is performed entirely in the browser.
- There is no password hashing or server-side session management.
- User data can be viewed or modified through browser developer tools.
- The password-reset feature does not verify user identity through email.
- Contact form submissions are not delivered to a server or stored permanently.

Do not use real passwords, personal information, or sensitive data while testing the application.

## Potential improvements

Future development could include:

- Implementing a secure backend authentication service
- Hashing passwords and using server-managed sessions
- Adding email-based password recovery
- Persisting contact messages through a backend service
- Improving form validation and accessible error messaging
- Moving remaining inline styles and scripts into dedicated files
- Adding automated tests and continuous integration
- Adding additional subjects, search, filtering, and progress tracking
- Deploying the application through a production hosting platform

## License

No license has currently been specified for this project. Add an appropriate license file before distributing or reusing the project commercially.
