// js/main.js
// Общие скрипты: мобильное меню, модалки и поведение header при скролле

document.addEventListener('DOMContentLoaded', () => {
    // 1. Бургер-меню для мобильных
    const burgerBtn = document.querySelector('.burger-btn');
    const navLinks = document.querySelector('.nav-links');
    if (burgerBtn && navLinks) {
      burgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burgerBtn.classList.toggle('active');
      });
    }
  
    // 2. Модальные окна (атрибуты: data-modal-open, data-modal-close)
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      const selector = btn.getAttribute('data-modal-open');
      const modal = document.querySelector(selector);
      btn.addEventListener('click', () => modal.classList.add('visible'));
    });
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      const modal = btn.closest('.modal');
      btn.addEventListener('click', () => modal.classList.remove('visible'));
    });
  
    // 3. Скрытие header при скролле вниз и показ при скролле вверх
    const header = document.querySelector('.site-header');
    let lastScrollY = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollY = currentScroll;
    });
  });