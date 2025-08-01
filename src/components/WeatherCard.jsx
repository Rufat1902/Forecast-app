function WeatherCard({ weather }) {
  const shouldBringUmbrella = weather.weather[0].main.toLowerCase().includes('rain');

  return (
    <div className="p-4 bg-white rounded shadow mt-4 flex items-center gap-4">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="w-20 h-20"
      />
      <div>
        <h2 className="text-xl font-bold">{weather.name}</h2>
        <p className="text-lg">
          {weather.main.temp}°C – {weather.weather[0].description}
        </p>
        <p className={`font-semibold ${shouldBringUmbrella ? 'text-blue-600' : 'text-green-600'}`}>
          {shouldBringUmbrella ? '☔ Take umbrella!' : 'The weather is good!'}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;