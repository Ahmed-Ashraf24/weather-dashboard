
import './CurrentWeather.css';
function CurrentWeather({ city, weather }) {
  const current = weather.current;

  return (
    <section className="current-weather">
      <div>
        <h2>{city.name}, {city.country}</h2>
        <p>Current Weather</p>
      </div>

      <div className="current-temperature">
        <h1>{Math.round(current.temperature_2m)}°C</h1>
        <p>Feels like {Math.round(current.apparent_temperature)}°C</p>
      </div>

      <div className="weather-details">
        <p>Humidity: {current.relative_humidity_2m}%</p>
        <p>Wind: {current.wind_speed_10m} km/h</p>
        <p>Precipitation: {current.precipitation} mm</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
