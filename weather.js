const apiKey = '9a1a435b0270970d3d1b99ab132ab7c3';

const baseURL = 'http://api.weatherstack.com/current';

function takeInput() {
    var city = document.getElementById('cityinput').value;
    console.log(city);
    return city;
}


function getWeather() {
    var city = takeInput();
    var url = `${baseURL}?access_key=${apiKey}&query=${city}&units=f`;
    console.log('URL:', url);

    fetch(url)
    .then(function(result) {
        return result.json();
      })
    .then(function(json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(data) {
    document.getElementById('weatherpic').src = data.current.weather_icons[0];
    document.getElementById('temp').innerHTML = data.current.temperature + '°';
    document.getElementById('description').innerHTML = data.current.weather_descriptions[0];
  }



