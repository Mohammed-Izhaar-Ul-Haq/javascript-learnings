const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});
