const weatherData = [
  { city: "New York", temperature: 16, humidity: 70, windSpeed: 7 },
  { city: "London", temperature: 12, humidity: 80, windSpeed: 5 },
  { city: "Tokyo", temperature: 22, humidity: 60, windSpeed: 4 },
  { city: "Sydney", temperature: 25, humidity: 50, windSpeed: 6 },
  { city: "Paris", temperature: 15, humidity: 65, windSpeed: 5 },
  { city: "Berlin", temperature: 14, humidity: 60, windSpeed: 6 },
  { city: "Moscow", temperature: 5, humidity: 75, windSpeed: 10 },
  { city: "Toronto", temperature: 17, humidity: 55, windSpeed: 8 },
  { city: "Rio de Janeiro", temperature: 26, humidity: 85, windSpeed: 7 },
  { city: "Beijing", temperature: 20, humidity: 40, windSpeed: 3 },
  { city: "Mumbai", temperature: 30, humidity: 70, windSpeed: 5 },
  { city: "Los Angeles", temperature: 19, humidity: 65, windSpeed: 4 },
  { city: "Cape Town", temperature: 18, humidity: 60, windSpeed: 6 },
  { city: "Rome", temperature: 21, humidity: 55, windSpeed: 3 },
  { city: "Bangkok", temperature: 33, humidity: 75, windSpeed: 2 },
  { city: "Istanbul", temperature: 20, humidity: 60, windSpeed: 4 },
  { city: "Lagos", temperature: 29, humidity: 80, windSpeed: 3 },
  { city: "Buenos Aires", temperature: 23, humidity: 70, windSpeed: 5 },
  { city: "Chicago", temperature: 10, humidity: 65, windSpeed: 7 },
  { city: "Shanghai", temperature: 19, humidity: 80, windSpeed: 6 },
];

const showCityNotFound = () => {
  alert("City not found!!!");
  alert("City forecast not found!!!");
};

const fetchWeather = (city) => {
  const weather = weatherData.find((item) => item.city.toLowerCase() === city.toLowerCase());

  if (weather) {
    displayCurrentWeather(weather);
    fetchForecast(city);
  } else {
    showCityNotFound();
  }
};

const displayCurrentWeather = ({ city, temperature, humidity, windSpeed }) => {
  document.getElementById("weatherDisplay").innerHTML = `
    <h5>Current Weather for ${city}</h5>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;
};

const fetchForecast = (city) => {
  const weather = weatherData.find((item) => item.city.toLowerCase() === city.toLowerCase());

  if (weather) {
    const forecast = [];
    for (let i = 1; i <= 5; i++) {
      forecast.push(weather.temperature + i);
    }
    displayForecast(city, forecast);
  } else {
    showCityNotFound();
  }
};

const displayForecast = (city, forecast) => {
  let forecastHTML = `<h5>5-Day Forecast for ${city}</h5>`;

  for (let i = 0; i < forecast.length; i++) {
    forecastHTML += `<p>Day ${i + 1}: ${forecast[i]}°C</p>`;
  }

  document.getElementById("weatherDisplay").innerHTML += forecastHTML;
};

const searchWeather = () => {
  const city = document.getElementById("cityName").value;
  if (city) {
    fetchWeather(city);
    saveRecentSearch(city);
    displayRecentSearches();
  }
};

const saveRecentSearch = (city) => {
  let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  searches = searches.filter((search) => search.toLowerCase() !== city.toLowerCase());
  searches.unshift(city);

  if (searches.length > 5) searches = searches.slice(0, 5);

  localStorage.setItem("recentSearches", JSON.stringify(searches));
};

const displayRecentSearches = () => {
  const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];

  document.getElementById("recentSearches").innerHTML = searches
    .map(
      (city) =>
        `<li class="list-group-item">
          <button class="btn" onclick="fetchWeather('${city}')">${city}</button>
        </li>`
    )
    .join("");
};

window.onload = displayRecentSearches;
