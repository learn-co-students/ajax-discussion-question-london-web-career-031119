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
  .then (json => {
    document.querySelector('h3#fullname').append(json.results[0].name.first)
    document.querySelector('h4#email').append(json.results[0].email)
    document.querySelector('h4#city').append(json.results[0].location.city)
    document.querySelector('h4#street').append(json.results[0].location.street)
    document.querySelector('h4#state').append(json.results[0].location.state)
    document.querySelector('h4#postcode').append(json.results[0].location.postcode)
    document.querySelector('h4#phone').append(json.results[0].phone)
    document.querySelector('h4#cell').append(json.results[0].cell)
    document.querySelector('h4#date_of_birth').append(json.results[0].dob.date)
  })
}

