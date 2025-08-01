export async function getWeather(city) {
  const res = await fetch(
    `${'https://api.openweathermap.org/data/2.5'}/weather?q=${city}&units=metric&lang=en&appid=${'9c5ae8aaf755d64a7466ffbbd290cc11'}`
  );

  if (!res.ok) {
    throw new Error('Not found or API error');
  }

  const data = await res.json();
  return data;
}

export async function getForecast(city) {
  const res = await fetch(
    `${'https://api.openweathermap.org/data/2.5'}/forecast?q=${city}&units=metric&lang=en&appid=${'9c5ae8aaf755d64a7466ffbbd290cc11'}`
  );

  if (!res.ok) {
    throw new Error('Forecast not found or API error');
  }

  const data = await res.json();
  return data;
}