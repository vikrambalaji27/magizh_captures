/* ============================================================
   MAGIZH CAPTURES — script.js
   ============================================================ */
 
/* ── MOBILE MENU TOGGLE ── */
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}
 
/* Close mobile menu when clicking outside */
document.addEventListener('click', function (event) {
  var menu = document.getElementById('mobileMenu');
  var hamburger = document.querySelector('.hamburger');
  if (
    menu.classList.contains('open') &&
    !menu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    menu.classList.remove('open');
  }
});
 
/* ── NAVBAR SHRINK ON SCROLL ── */
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.style.padding = '0.7rem 3rem';
  } else {
    navbar.style.padding = '1.2rem 3rem';
  }
});
 
/* ── SCROLL REVEAL ── */
var revealElements = document.querySelectorAll('.reveal');
 
var revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
 
revealElements.forEach(function (el) {
  revealObserver.observe(el);
});
 
/* ── BOOKING FORM SUBMIT ── */
function handleSubmit() {
  var name    = document.getElementById('name').value.trim();
  var phone   = document.getElementById('phone').value.trim();
  var date    = document.getElementById('event-date').value;
  var service = document.getElementById('service').value;
  var message = document.getElementById('message').value.trim();
 
  if (!name) {
    alert('Please enter your name.');
    document.getElementById('name').focus();
    return;
  }
 
  if (!phone) {
    alert('Please enter your phone number.');
    document.getElementById('phone').focus();
    return;
  }
 
  /* Build WhatsApp message */
  var waText = 'Hi Magizh Captures! I would like to book a session.\n\n';
  waText += 'Name: ' + name + '\n';
  waText += 'Phone: ' + phone + '\n';
  if (date)    { waText += 'Event Date: ' + date + '\n'; }
  if (service) { waText += 'Service: ' + service + '\n'; }
  if (message) { waText += 'Message: ' + message; }
 
  var encoded = encodeURIComponent(waText);
  window.open('https://wa.me/919787955292?text=' + encoded, '_blank');
}
 
/* ── ACTIVE NAV LINK HIGHLIGHT ON SCROLL ── */
var sections = document.querySelectorAll('section[id]');
var navAnchors = document.querySelectorAll('.nav-links a');
 
window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY + 120;
 
  sections.forEach(function (sec) {
    var top    = sec.offsetTop;
    var bottom = top + sec.offsetHeight;
    var id     = sec.getAttribute('id');
 
    if (scrollPos >= top && scrollPos < bottom) {
      navAnchors.forEach(function (a) {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + id) {
          a.classList.add('active');
        }
      });
    }
  });
});
