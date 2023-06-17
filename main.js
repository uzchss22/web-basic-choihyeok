// hamberger menu incone element active
const menuIcone = document.querySelector('.hamberger');
const menu = document.querySelector('.category_list');

menuIcone.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// dark mode  # disable using teachable machine model
function darkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// display browser clock
let Target = document.getElementById("clock");
        function clock() {
            let time = new Date();

            let year = time.getFullYear();
            let month = time.getMonth();
            
            let date = time.getDate();
            let day = time.getDay();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            
            let week = ['Sun', 'Mun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];

            Target.innerText = 
            `${week[day]} ${monthList[month]} ${date} ` +
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} KST ` + year;
                
        }
        clock();
        setInterval(clock, 1000);