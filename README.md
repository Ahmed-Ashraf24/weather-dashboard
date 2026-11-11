# Weather Dashboard

A responsive weather dashboard built with React that allows users to search for cities around the world and view current weather conditions alongside a 5-day weather forecast.

The application integrates the Open-Meteo API to retrieve geographical information and weather data without requiring an API key.

## Features

- **City Search:** Search for cities around the world.
- **Current Weather:** Display current temperature and feels-like temperature.
- **Weather Details:** View humidity, wind speed, and precipitation.
- **5-Day Forecast:** Display upcoming daily weather conditions.
- **Weather Descriptions:** Convert weather codes into readable descriptions.
- **Default Location:** Automatically load Cairo weather when the application starts.
- **Loading States:** Display feedback while retrieving weather data.
- **Error Handling:** Handle unsuccessful requests and invalid city searches.
- **Responsive Design:** Adapt to desktop and mobile screen sizes.

## Tech Stack

- React.js
- JavaScript (ES6+)
- CSS3
- Open-Meteo Geocoding API
- Open-Meteo Weather Forecast API
- Fetch API

## APIs Used

### Geocoding API

Used to search for cities and retrieve their geographical coordinates.

[Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)

### Weather Forecast API

Used to retrieve current weather conditions and daily forecast data based on latitude and longitude.

[Open-Meteo Weather API](https://open-meteo.com/en/docs)

## Project Structure

```text
src/
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── CurrentWeather/
│   │   ├── CurrentWeather.jsx
│   │   └── CurrentWeather.css
│   └── ForecastCard/
│       ├── ForecastCard.jsx
│       └── ForecastCard.css
├── pages/
│   ├── WeatherPage.jsx
│   └── WeatherPage.css
├── services/
│   └── weatherService.js
├── App.js
├── App.css
└── index.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd weather-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## API Integration

The application uses a service-based approach to handle API requests:

1. The user enters a city name.
2. The Geocoding API retrieves the city's geographical coordinates.
3. The Weather Forecast API uses those coordinates to retrieve weather information.
4. React updates the interface with the current weather and 5-day forecast.

No API key or backend configuration is required.

## Future Improvements

- Weather icons and improved visual representations.
- Search history and favorite locations.
- Hourly weather forecasts.
- Automatic location detection.
- Celsius/Fahrenheit temperature switching.
