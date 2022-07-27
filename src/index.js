import axios from "axios";
let now = new Date();

let apiKey = "351f91287b21e3eaef97ef1db4d5e2ba";

let h2 = document.querySelector("h2");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes}`;

function searchNow(event) {
  event.preventDefault();
  alert("Searching for City");
  let searchInput = document.querySelector("#city-input");
  searchInput.innerHTML = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-input");

form.addEventListener("submit", searchNow);

function showWeather(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let description = document.querySelector("#temperature-description");
  let heading = document.querySelector("h3");
  heading.innerHTML = `${temperature}°C`;
  console.log(`${city} ${temperature}`);
  description.innerHTML = response.data.weather[0].description;
}
