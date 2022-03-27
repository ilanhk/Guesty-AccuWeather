// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Container,  } from 'react-bootstrap';
import './App.css';
import WeatherForWeek from './components/WeatherForWeek';
import DayWeather from './components/DayWeather';

function App() {
  return (
    <div className="App">
      <WeatherForWeek />
    </div>
  )
}

export default App;
