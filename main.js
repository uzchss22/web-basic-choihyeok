// hamberger menu incone element active
const menuIcone = document.querySelector('.hamberger');
const menu = document.querySelector('.category_list');

menuIcone.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// dark mode
function darkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

alert("날짜 및 시간 기능 미추가");