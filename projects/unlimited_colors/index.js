
//generate random hex code
const randomNumber = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//   //set interval

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor(b) {
    document.body.style.backgroundColor = randomNumber();
  }
};
//clearInterval

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId=null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
