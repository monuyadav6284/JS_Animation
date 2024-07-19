document.getElementById("button").addEventListener("click", function () {
  var inputValue = parseInt(document.getElementById("input").value);
  if (inputValue && inputValue > 0) {
    var line = document.getElementById("line");
    var line1 = document.getElementById("line1");
    var circle = document.querySelector(".circle");
    // var body = document.getElementById("body");
    var animationDuration = 1;
    var totalRotationDuration = inputValue * animationDuration * 1000; // change second to ms
    line.style.animation =
      "rotateLine " + animationDuration + "s linear infinite";
    line1.style.animation =
      "rotateLine " + animationDuration + "s linear infinite";
    var interval = setInterval(function () {
      var randomColor = getRandomColor();
      circle.style.backgroundColor = randomColor;
    //   body.style.backgroundColor = randomColor;
    }, animationDuration * 1000);
    setTimeout(function () {
      line.style.animation = "none";
      line1.style.animation = "none";
      clearInterval(interval);
    }, totalRotationDuration);
  }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
