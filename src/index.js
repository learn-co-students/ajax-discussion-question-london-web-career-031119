const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let person;

fetch('https://randomuser.me/api/')
  .then(response => {
    return response.json()
  })
  .then(data => {
    person = data.results[0]
  })

const button = document.querySelector(".btn.btn-primary")

button.addEventListener('click', event => {
  document.querySelector("#fullname").textContent = person.name.title + " " + person.name.first + " " + person.name.last
  document.querySelector("#email").textContent = person.email
  document.querySelector("#street").textContent = person.location.street
  document.querySelector("#city").textContent = person.location.city
  document.querySelector("#state").textContent = person.location.state
  document.querySelector("#postcode").textContent = person.location.postcode
  document.querySelector("#phone").textContent = person.phone
  document.querySelector("#cell").textContent = person.cell
  document.querySelector("#date_of_birth").textContent = person.dob.date.slice(0,10)
})
