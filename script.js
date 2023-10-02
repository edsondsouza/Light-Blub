var lightBulb = document.querySelector("#light-bulb");
var statusBulb = document.querySelector("#status");
var button = document.querySelector("button");
var isBulbOn = false;

button.addEventListener("click", () => {
  if (isBulbOn) {
    statusBulb.innerHTML = "Bulb is OFF!"
    console.log("off");
    lightBulb.style.backgroundColor = "white"
  } else {
    statusBulb.innerHTML = "Bulb is ON!"
    console.log("on");
    lightBulb.style.backgroundColor = "yellow"
  }
  isBulbOn = !isBulbOn; // toggle the state of the bulb
})
