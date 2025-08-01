import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== '') {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Check weather</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded border w-64"
      />
      <button
        onClick={handleSearch}
        className="mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        style={{ marginLeft: '10px' }}
      >
        Search
      </button>
    </div>
  );
}

export default HomePage;