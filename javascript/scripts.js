document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('nav ul li.active')?.classList.remove('active');
    this.parentElement.classList.add('active');
  });
});