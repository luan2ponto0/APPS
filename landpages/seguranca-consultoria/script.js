// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form (client-side only, no backend attached)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      formNote.textContent = 'Preencha os campos obrigatórios (nome e e-mail).';
      formNote.style.color = '#f87171';
      return;
    }

    formNote.textContent = 'Recebemos sua solicitação! Nossa equipe entrará em contato em breve.';
    formNote.style.color = '#34d399';
    form.reset();
  });
}
