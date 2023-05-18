// hamberger menu incone element active
const menuIcone = document.querySelector('.hamberger');
const menu = document.querySelector('.category_list');

menuIcone.addEventListener('click', () => {
  menu.classList.toggle('active');
});