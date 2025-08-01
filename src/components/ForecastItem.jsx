function ForecastItem({ data }) {
  const date = new Date(data.dt_txt).toLocaleDateString ('az-AZ', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="p-4 bg-white w-40 rounded shadow">
      <h3 className="font-bold">{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="w-16 h-16"
      />
      <p>{data.main.temp.toFixed(1)}°C</p>
      <p className="text-sm text-gray-600">{data.weather[0].description}</p>
    </div>
  );
}

export default ForecastItem;