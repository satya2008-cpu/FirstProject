// Form enhanced feedback
if (document.getElementById('contactForm')) {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('.form-button');
    button.textContent = 'Sending...';
    setTimeout(() => {
      alert('Thank you! Message sent (demo).');
      this.reset();
      button.textContent = 'Send Message';
      button.style.background = '';
    }, 1500);
  });
}
