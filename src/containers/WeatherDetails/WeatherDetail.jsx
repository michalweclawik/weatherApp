import React, { useEffect } from "react";
import { useState } from "react";
import Forecast from "../../components/Forecast/Forecast";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const WeatherDetail = (props) => {
  const { latitude, longitude, api_key } = props;
  const [weatherData, setWeatherData] = useState();

  const getWeather = async () => {
    console.log(latitude, longitude, api_key);
    const respond = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${latitude},${longitude}&days=7&aqi=yes&alerts=yes)`
    );
    const weatherData = await respond.json();
    console.log(weatherData);
    setWeatherData(weatherData);
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return (
    <>
      <div>{weatherData && <WeatherCard weatherData={weatherData} />}</div>
      <div>{weatherData && <Forecast weatherData={weatherData} />}</div>
    </>
  );
};

export default WeatherDetail;
