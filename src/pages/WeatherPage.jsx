
import { useState, useEffect } from 'react';

import { searchCity, getWeather } from '../services/weatherService';

import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import ForecastCard from '../components/ForecastCard/ForecastCard.jsx';

import './WeatherPage.css';

function WeatherPage() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(cityName) {
    try {
      setLoading(true);
      setError('');

      const cityData = await searchCity(cityName);

      const weatherData = await getWeather(
        cityData.latitude,
        cityData.longitude
      );

      setCity(cityData);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleSearch('Cairo');
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
        <p>Check weather conditions around the world.</p>
      </header>

      <SearchBar
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <p>Loading weather...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && city && weather && (
        <>
          <CurrentWeather
            city={city}
            weather={weather}
          />

          <section className="forecast-section">
            <h2>5-Day Forecast</h2>

            <div className="forecast-list">
              {weather.daily.time.map((date, index) => (
                <ForecastCard
                  key={date}
                  day={{
                    date,
                    weatherCode: weather.daily.weather_code[index],
                    max: weather.daily.temperature_2m_max[index],
                    min: weather.daily.temperature_2m_min[index],
                  }}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default WeatherPage;
