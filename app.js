// Get references to the search button and search bar
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-bar");

// Add an event listener to the search button to listen for clicks
searchBtn.addEventListener("click", () => {
  getWeather(searchInput.value);
});

// Add an event listener to the search input to listen for keyup events
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getWeather(searchInput.value);
  }
});

// Define an async function called getWeather that takes a cityName parameter
async function getWeather(cityName) {
  // Set your OpenWeatherMap API key
  const apiKey = "YOUR_API_KEY_HERE";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    // Use the fetch API to make a GET request to the OpenWeatherMap API using the apiUrl
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Get references to the relevant DOM elements
    const city = document.getElementById("city");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    city.textContent = cityName;
    // Set the text content of the temperature element to the temperature property of the data object, rounded to one decimal place
    temperature.textContent = `${Math.round(data.main.temp * 10) / 10}°C`;
    // Set the text content of the description element to the description property of the data object
    description.textContent = data.weather[0].description;
  } catch (error) {
    // If an error occurs, log the error to the console
    console.error(error);
  }
}
