
import './ForecastCard.css';
function ForecastCard({ day }) {
  const date = new Date(`${day.date}T00:00:00`);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  function getWeatherDescription(code) {
  if (code === 0) return 'Clear sky';
  if (code <= 3) return 'Partly cloudy';
  if (code === 45 || code === 48) return 'Fog';
  if (code <= 55) return 'Drizzle';
  if (code <= 65) return 'Rain';
  if (code <= 75) return 'Snow';
  if (code <= 82) return 'Rain showers';
  if (code >= 95) return 'Thunderstorm';

  return 'Cloudy';
}

  return (
    <article className="forecast-card">
      <h4>{formattedDate}</h4>

      <p>{getWeatherDescription(day.weatherCode)}</p>

      <div>
        <strong>{Math.round(day.max)}°</strong>
        {' / '}
        <span>{Math.round(day.min)}°</span>
      </div>
    </article>
  );
}

export default ForecastCard;
