import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWeather, getForecast } from '../api/weather';
import ForecastList from '../components/ForecastList';
import WeatherCard from '../components/WeatherCard';

function WeatherPage() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const current = await getWeather(city);
        const forecastData = await getForecast(city);
        setWeather(current);
        setForecast(forecastData.list);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [city]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <WeatherCard weather={weather} />

      <h2 className="max-w-screen-lg w-full mx-auto">5-day forecast:</h2>
      <ForecastList forecast={forecast} />
    </div>
  );
}

export default WeatherPage;