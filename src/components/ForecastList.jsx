import ForecastItem from './ForecastItem';

function ForecastList({ forecast }) {
  const filtered = forecast.filter(item => item.dt_txt.includes('12:00:00'));

  return (
    <div className="flex flex-row gap-4 overflow-x-auto p-4" style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
      {filtered.map(item => (
        <ForecastItem key={item.dt} data={item} />
      ))}
    </div>
  );
}

export default ForecastList;