function currentDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let today = `${day} ${hours}:${minutes}`;
  return today;
}
let date = document.querySelector("#current-date");
date.innerHTML = currentDate();

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city-name");
  city.innerHTML = cityInput.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureCurrent = document.querySelector("#current-temperature");
  let F = Math.round(21 * 1.8 + 32);
  temperatureCurrent.innerHTML = F;
}
let temperatureFahrenheit = document.querySelector("#Fahrenheit");
temperatureFahrenheit.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureCurrent = document.querySelector("#current-temperature");
  temperatureCurrent.innerHTML = 21;
}
let temperatureCelsius = document.querySelector("#Celsius");
temperatureCelsius.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  let temperatureCurrent = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.main.temp);
  temperatureCurrent.innerHTML = `${temperature}`;
}
let cityInput = document.querySelector("#city-input");
let city = cityInput.value;
let apiKey = "1b4add62678c7e2572d5cd6a74fa9dfe";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);

let showButton = document.querySelector("#show-button");
snowButton.addEventListener("click", showTemperature);
