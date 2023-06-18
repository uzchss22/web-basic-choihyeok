if (confirm("카메라 사용을 허용하시겠습니까?") == true){ 
  alert("조도감지를 통해 화면모드가 자동으로 변경됩니다.");
  tmdm();
} else{
  alert("카메라 사용이 취소되었습니다 \n스위치를 통해 야간모드로 설정할 수 있습니다.");
}
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


// teachable machine darkmode code
// More API functions here:
        // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

        // the link to your model provided by Teachable Machine export panel
function tmdm() {
  document.querySelector('#switch').style.display = 'none';
  document.querySelector('.toggle2').style.display = 'none';
  const URL = "https://teachablemachine.withgoogle.com/models/EXuBsUscK/";

  let model, webcam, labelContainer, maxPredictions;

  // Load the image model and setup the webcam
  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document
      .getElementById("webcam-container")
      .appendChild(webcam.canvas);
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    console.log(prediction[0].probability);
    if (prediction[0].probability > 0.5) {
      console.log("day");
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
      document.querySelector("#nav").style.backgroundColor = "#2c3a47";
      document.querySelector("#sidebar").style.backgroundColor =
      "#f1f2f6";
      document.querySelector("#sidebar").style.color = "#2c3a47";
      document.querySelector(".hamberger").style.color = "#aaa69d";
      var tempNavA = document.querySelectorAll(".nav_a");
      for (let i = 0; i <= 3; i++) tempNavA[i].style.color = "#aaa69d";
      var tempSidebarA = document.querySelectorAll(".sidebar_a");
      for (let i = 0; i <= 1; i++)
        tempSidebarA[i].style.color = "#2c3a47";
    } else {
      console.log("night");
      document.querySelector("body").style.backgroundColor = "#1e272e";
      document.querySelector("body").style.color = "#dadada";
      document.querySelector("#nav").style.backgroundColor = "#0e0700";
      document.querySelector("#sidebar").style.backgroundColor =
        "#0e171e";
      document.querySelector("#sidebar").style.color = "whitesmoke";
      document.querySelector(".hamberger").style.color = "#95afc0";
      var tempNavA = document.querySelectorAll(".nav_a");
      for (let i = 0; i <= 3; i++) tempNavA[i].style.color = "#95afc0";
      var tempSidebarA = document.querySelectorAll(".sidebar_a");
      for (let i = 0; i <= 1; i++)
        tempSidebarA[i].style.color = "whitesmoke";
    }
  }
  init();
}