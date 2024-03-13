
    const searchInput = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');
    const image = document.querySelector('.icon');

async function getWeather(city){
     var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f330f995f4529fb9405c40e6897522f1&units=metric`);
     if(res.status == 404 ){
        document.querySelector('.error').style.display = "block";
     }else {
        document.querySelector('.error').style.display = "none";
     }
     var data = await res.json();
     console.log(data);
     document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector('.city').innerHTML = data.name;
     document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + "%";
     document.querySelector('.wind-speed').innerHTML = Math.round(data.wind.speed) + "km/h";

     if(data.weather[0].main == 'Clouds'){
         image.src = "./pics/cloud.png";
         document.body.style.backgroundImage = 'url(pics/cloudbg.png)';
     }else if(data.weather[0].main == 'Clear'){
         image.src = "./pics/clear.png";
         document.body.style.backgroundImage = 'url(pics/clearbg.png)';
     }else if(data.weather[0].main == 'Mist'){
         image.src = "./pics/mist.png";
         document.body.style.backgroundImage = 'url(pics/mistbg.png)';
     }else if(data.weather[0].main == 'Rain'){
         image.src = "./pics/rain.png";
         document.body.style.backgroundImage = 'url(pics/rainbg.png)';
     }else if(data.weather[0].main == 'Snow'){
          image.src = "./pics/snow.png";
          document.body.style.backgroundImage = 'url(pics/snowbg.png)';
     }else if(data.weather[0].main == 'Haze'){
          image.src = "./pics/haze.png";
          document.body.style.backgroundImage = 'url(pics/hazebg.png)';
     }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})

