const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const button = document.querySelector('button.btn')
button.addEventListener('click',fetchRandom)


function fetchRandom() {
  fetch('https://randomuser.me/api/')
  .then (res => res.json())
  .then (json => console.log(json.results[0]))
}

