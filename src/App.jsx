import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weather/:city" element={<WeatherPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
