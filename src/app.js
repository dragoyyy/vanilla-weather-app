function displayTemperature(response) {
    console.log(response.data);
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "473a5a77714b708fee4cf35264cac21d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
