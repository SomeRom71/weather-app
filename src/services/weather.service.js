const API_KEY = '14d17c0b28d274a88196b19b61ec9ff3';

export default function getWeather(cityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
}
