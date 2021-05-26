function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
  }
    let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
     let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;

}

function displayTemperature(response) {
   
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "473a5a77714b708fee4cf35264cac21d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
