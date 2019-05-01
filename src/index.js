function fetchData() {
  fetch('https://randomuser.me/api/')
  .then( res => { return res.json(); } )
};

const data = fetchData();

const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

document.querySelector('.btn-primary').addEventListener("click", () => {
  console.log("clicked");
});
