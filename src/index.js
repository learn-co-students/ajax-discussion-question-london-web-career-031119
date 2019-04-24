const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

blueBtn = document.querySelector(".btn-primary")

function selectElement(id) {
  return document.getElementById(id)
}

blueBtn.addEventListener("click", event => {
  event.preventDefault()
  
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    const person = data.results[0]
    selectElement("profile_picture").src = person.picture.large
    selectElement("fullname").textContent = `${person.name.first} ${person.name.last}`
    selectElement("email").textContent = person.email
    selectElement("street").textContent = person.location.street
    selectElement("city").textContent = person.location.city
    selectElement("state").textContent = person.location.state
    selectElement("postcode").textContent = person.location.postcode
    selectElement("phone").textContent = person.phone
    selectElement("cell").textContent = person.cell
    selectElement("date_of_birth").textContent = person.dob.date.substr(0,10)
  })
})