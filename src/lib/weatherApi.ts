const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found. Please check the spelling and try again.");
    }
    throw new Error("Failed to fetch weather data. Please try again later.");
  }
  
  return response.json();
};

export const fetchForecast = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch forecast data.");
  }
  
  const data = await response.json();
  return data.list;
};
