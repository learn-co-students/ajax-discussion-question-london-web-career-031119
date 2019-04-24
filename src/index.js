const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function selectNode(element, string) {
  return document.querySelector(element).textContent = string;
}

let authors;

url = "https://randomuser.me/api/"

fetch(url)
  .then((resp) => resp.json()) 
    .then(function (data) {
      authors = data.results[0]; 
      })

document.querySelector(".btn.btn-primary").addEventListener("click", event => {
selectNode("#fullname", (authors.name.title + " " + authors.name.first + " " + authors.name.last));
selectNode("#email", (authors.email));
selectNode("#phone", (authors.phone));
selectNode("#cell", (authors.cell));
selectNode("#date_of_birth", (authors.dob.date));
selectNode("#street", (authors.location.street));
selectNode("#city", (authors.location.city));
selectNode("#state", (authors.location.state));
selectNode("#postcode", (authors.location.postcode));
})
  