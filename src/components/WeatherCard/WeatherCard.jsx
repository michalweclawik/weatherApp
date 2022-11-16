import React from "react";
import "./WeatherCard.scss";
import { fromUnixTime, format } from "date-fns";

const WeatherCard = ({ weatherData }) => {
  const currentLocation = weatherData.location.name;
  const currentLocationDay = weatherData.location.localtime_epoch;
  const currentConditionText = weatherData.current.condition.text;
  const lastUpdate = weatherData.current.last_updated;
  const currentConditionIcon = weatherData.current.condition.icon;
  const currentCelciusTemp = weatherData.current.feelslike_c;
  const humidity = weatherData.current.humidity;
  const currentWind = weatherData.current.wind_mph;
  const forecast = weatherData.forecast;

  return (
    <div className="weatherCard">
      <h2 className="weatherCard__location">{currentLocation} </h2>
      <h2 className="weatherCard__day">
        {format(new Date(fromUnixTime(currentLocationDay)), "EEE")}{" "}
      </h2>
      <div className="weatherCard__condition">
        <h4 className="weatherCard__conditionText"> {currentConditionText}</h4>

        <img
          src={currentConditionIcon}
          alt={currentConditionIcon}
          className="weatherCard__conditionIcon"
        />
        <p className="weatherCard__temp"> {currentCelciusTemp} °C </p>
      </div>
      <div className="weatherCard__humwin">
        <p>
          Humidity: <span id="humidity">{humidity}% </span>
        </p>
        <p>
          WindSpeed: <span id="windspeed">{currentWind} mph</span>
        </p>
      </div>
      <h5 className="weatherCard__lastupdate">
        Weather update at : {lastUpdate}
      </h5>
    </div>
  );
};

export default WeatherCard;
