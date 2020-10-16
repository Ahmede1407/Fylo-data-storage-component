var dataRange = document.querySelector("#data-range");
var dataLeft = document.querySelector(".data-left-number");
var dataUsed = document.querySelector(".data-used");

dataRange.addEventListener("input" , () => {
  let positionX = dataRange.value;
  let color = `linear-gradient(90deg, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${positionX/10}%, hsl(229, 57%, 11%) ${positionX/10}%, hsl(229, 57%, 11%) 100%)`;
  dataRange.style.background = color;


  dataLeft.textContent = (1000 - dataRange.value);
  dataUsed.textContent = dataRange.value; 
})
