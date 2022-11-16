import React from "react";
import "./Forecast.scss";
import { fromUnixTime, format } from "date-fns";

const Forecast = ({ weatherData }) => {
  const forecastArray = weatherData.forecast.forecastday;

  return (
    <div className="forecast">
      Forecast
      <div className="forecast__cards">
        {forecastArray.map((day, index) => (
          <div className="forecast__card" key={index}>
            <p className="forecast__date">{day.date} </p>

            <p className="forecast__day">
              {format(new Date(fromUnixTime(day.date_epoch)), "EEE")}
            </p>

            <p className="forecast__temp">
              Average Temp: {day.day.avgtemp_c} °C
            </p>
            <p className="forecast__text">Weather: {day.day.condition.text}</p>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="forecast__conditionIcon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
