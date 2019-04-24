const fullname = document.getElementById("fullname");
const street = document.querySelector('#street')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const email = document.querySelector('#email')
const postcode = document.querySelector('#postcode')
const phone = document.querySelector('#phone')
const cell = document.querySelector('#cell')
const dateOfBirth = document.querySelector('#date_of_birth')
const image = document.querySelector('#image')

const btn = document.querySelector('button');

const url = 'https://randomuser.me/api/'

btn.addEventListener("click", (event) => {
  event.preventDefault()
  fetchData();
});

function fetchData(){
    fetch(url)
    .then( res => res.json() )
    .then( function(data) {

      image.src = data.results[0]['picture']['large']
      street.innerHTML = data.results[0]['location']['street'];
      city.innerHTML = data.results[0]['location']['city'];
      state.innerHTML = data.results[0]['location']['state'];
      postcode.innerHTML = data.results[0]['location']['postcode'];
      phone.innerHTML = data.results[0]['phone'];
      cell.innerHTML = data.results[0]['cell'];
      fullname.innerHTML = `${data.results[0]['name']['first']} ${data.results[0]['name']['last']}`
      email.innerHTML = data.results[0]['email'];
      dateOfBirth.innerHTML = moment(data.results[0]['dob']['date']).format("MMMM Do YYYY");

    })
    .catch(function(error) {
      console.log(error);
    });  
}



