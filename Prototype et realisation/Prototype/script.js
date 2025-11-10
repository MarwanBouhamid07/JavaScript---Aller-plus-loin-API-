let search = document.getElementById("city-input")

let btnSearch = document.getElementById("search-btn")

btnSearch.onclick = function (){

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&lang=fr&appid=8811f27959bb93079894c5cd14a0562c`)
    .then(request => request.json())
    .then(data => {
        console.log(data);
        
        let image = document.getElementById("imageWeather")
        let cityName = document.getElementById("city-name")
        let temp = document.getElementById("temp")
        let disc = document.getElementById("desc")
        let humidity = document.getElementById("humidity")
        let wind = document.getElementById("wind")
        let pressure = document.getElementById("pressure")
        let feelsLike = document.getElementById("feels-like")

        feelsLike.textContent = Math.round(data.main.feels_like) + "°C"

        pressure.textContent = data.main.pressure

        wind.textContent = data.wind.speed + "km/h"

        humidity.textContent = data.main.humidity + "%"

        temp.textContent = Math.round(data.main.temp) + "°C"

        disc.textContent = data.weather[0].description

        cityName.textContent = data.name
        
        image.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        
    })
}