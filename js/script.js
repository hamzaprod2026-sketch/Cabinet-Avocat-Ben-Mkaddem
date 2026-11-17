/* Interactions sans dépendance — JavaScript Vanilla */
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }));

  // Apparition progressive des éléments au défilement.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  // FAQ : un seul panneau ouvert à la fois.
  document.querySelectorAll('.faq-list details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        document.querySelectorAll('.faq-list details').forEach(other => {
          if (other !== detail) other.open = false;
        });
      }
    });
  });

  // Validation locale uniquement. Aucun envoi n'est simulé.
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.textContent = '';
    feedback.className = 'form-feedback';
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const consent = form.elements.consent.checked;

    let error = '';
    if (!name || !email || !subject || !message) error = 'Veuillez compléter tous les champs obligatoires.';
    else if (!emailPattern.test(email)) error = 'Veuillez saisir une adresse e-mail valide.';
    else if (phone && !/^[+()\d\s.-]{6,25}$/.test(phone)) error = 'Veuillez vérifier le format du numéro de téléphone.';
    else if (!consent) error = 'Veuillez confirmer votre accord concernant le traitement de votre demande.';

    if (error) {
      feedback.textContent = error;
      feedback.classList.add('error');
      return;
    }
    feedback.textContent = 'Vos champs ont été validés sur cette page. Aucune demande n’a été envoyée : le formulaire doit être relié à un service sécurisé pour transmettre votre message.';
    form.reset();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
