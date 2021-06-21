document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.faq-accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const _this = e.currentTarget;
      const control = _this.querySelector('.faq-accordion__control');
      const content = _this.querySelector('.faq-accordion__content');

      _this.classList.toggle('open')

      if (_this.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});