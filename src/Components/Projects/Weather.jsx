import { useState, useEffect } from 'react';
import './Weather.css';
import Navbar from '../Navbar/Navbar';
import Loading from '../Loading/Loading';

function App() {
  const [apiData, setApiData] = useState(null);
  const [city, setCity] = useState("kolkata");
  const [loading,setLoading]=useState(true);
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "0cef8413b1c35a4579c55115cafbe496"; // Replace with your OpenWeatherMap API key

  const url = `${api}${city}&units=metric&appid=${apiKey}`;

  async function apiCall(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('API Data:', data);
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData(null);
    }
  }

  useEffect(() => {
    apiCall(url);
  }, [url, city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setLoading(false);

  };

  // Function to get weather icon class based on weather condition
  const getWeatherIconClass = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) {
      return "wi wi-thunderstorm";
    } else if (weatherId >= 300 && weatherId < 400) {
      return "wi wi-showers";
    } else if (weatherId >= 500 && weatherId < 600) {
      return "wi wi-rain";
    } else if (weatherId >= 600 && weatherId < 700) {
      return "wi wi-snow";
    } else if (weatherId >= 700 && weatherId < 800) {
      return "wi wi-fog";
    } else if (weatherId === 800) {
      return "wi wi-day-sunny";
    } else if (weatherId > 800 && weatherId < 900) {
      return "wi wi-cloudy";
    } else {
      return "wi wi-na"; // Not Available
    }
  };

  // Function to get background color based on weather condition
  const getBackgroundColor = (weatherId) => {
    if (weatherId >= 200 && weatherId < 600) {
      return "#5e5e5e"; // Gray for rain, thunderstorm, etc.
    } else if (weatherId === 800) {
      return "#87CEEB"; // Sky blue for clear sky
    } else {
      return "#FFFFFF"; // Default white
    }
  };

  return (

    <div className="container1" style={{ backgroundColor: getBackgroundColor(apiData?.weather[0]?.id) }}>
      <h1>Weather Data</h1>
      <form>
        <label htmlFor="city">Select City: </label>
        <select onChange={handleCityChange} id="city" value={city}>
          <option value="delhi">Delhi</option>
          <option value="kolkata">Kolkata</option>
          <option value="lucknow">Lucknow</option>
          <option value="mumbai">Mumbai</option>
        </select>
      </form>

      <div>
        {
        
        
        apiData ? (
          <div>
            <i className={getWeatherIconClass(apiData.weather[0].id)} style={{ fontSize: "64px" }}></i>
            <table>
              <tbody>
                <tr>
                  <td>Temperature (°C):</td>
                  <td>{apiData.main.temp}</td>
                </tr>
                <tr>
                  <td>Wind Speed (m/s):</td>
                  <td>{apiData.wind.speed}</td>
                </tr>
                <tr>
                  <td>City Name:</td>
                  <td>{apiData.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          // <p className="loading">Loading...</p>
      loading && <Loading/>

        )}
        
      </div>

  </div>
  );
}

export default App;




// 0cef8413b1c35a4579c55115cafbe496