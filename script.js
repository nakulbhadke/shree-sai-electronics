// ================================
//  Shree Sai Electronics - script.js
// ================================

// ---------- SCROLL REVEAL ----------
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));


// ---------- MOBILE HAMBURGER MENU ----------
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});


// ---------- STICKY NAV SHADOW ----------
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});


// ---------- SMOOTH SCROLL FOR NAV LINKS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// ---------- CONTACT FORM SUBMIT ----------
const sendBtn = document.getElementById('sendBtn');
const sentMsg = document.getElementById('sent-msg');

sendBtn.addEventListener('click', () => {
  const name    = document.getElementById('fname').value.trim();
  const phone   = document.getElementById('fphone').value.trim();
  const subject = document.getElementById('fsubject').value.trim();
  const message = document.getElementById('fmessage').value.trim();

  // Basic validation
  if (!name || !phone || !message) {
    alert('Please fill in your Name, Phone, and Message.');
    return;
  }

  // Show success state
  sentMsg.style.display = 'block';
  sendBtn.textContent = 'Sent ✓';
  sendBtn.style.background = '#16a34a';
  sendBtn.disabled = true;

  // Optional: open WhatsApp with the message pre-filled
  const waText = encodeURIComponent(
    `Hello Shree Sai Electronics!\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
  );
  setTimeout(() => {
    window.open(`https://wa.me/919689279986?text=${waText}`, '_blank');
  }, 800);
});


// ---------- ACTIVE NAV LINK ON SCROLL ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--blue)';
    }
  });
});
