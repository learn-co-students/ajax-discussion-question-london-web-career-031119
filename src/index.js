const fullname = document.getElementById("fullname");
const street = document.querySelector('#street')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const email = document.querySelector('#email')
const postcode = document.querySelector('#postcode')
const phone = document.querySelector('#phone')
const cell = document.querySelector('#cell')
const dateOfBirth = document.querySelector('#date_of_birth')

const btn = document.querySelector('button');

const url = 'https://randomuser.me/api/'


function fetchData(){
    fetch(url)
    .then( res => res.json() )
    .then( function(data) {
      let streetData = data.results[0]['location']['street'];
      let cityData = data.results[0]['location']['city'];
      let stateData = data.results[0]['location']['state'];
      let postCodeData = data.results[0]['location']['postcode'];
      let phoneData = data.results[0]['phone'];
      let cellData = data.results[0]['cell'];
      let nameData = `${data.results[0]['name']['first']} ${data.results[0]['name']['last']}`
      let emailData = data.results[0]['email'];
      let dobData = moment(data.results[0]['dob']['date']).format("MMMM Do YYYY");


      fullname.innerHTML = nameData;
      street.innerHTML = streetData;
      city.innerHTML = cityData;
      state.innerHTML = stateData;
      email.innerHTML = emailData;
      postcode.innerHTML = postCodeData;
      phone.innerHTML = phoneData;
      cell.innerHTML = cellData;
      dateOfBirth.innerHTML = dobData;

    })
    .catch(function(error) {
      console.log(error);
    });  
}

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


btn.addEventListener("click", (event) => {
  alert('button is clicked')
  fetchData();
});



