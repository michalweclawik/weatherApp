/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import WeatherDetail from "../WeatherDetails/WeatherDetail";

const Home = ({ api_key }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [isPending, setIsPending] = useState(true);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    setIsPending(false);
  };

  useEffect(() => {
    getLocation();
  }, [latitude, longitude]);

  return (
    <div>
      {isPending && <div> Loading....</div>}
      {latitude && longitude && (
        <WeatherDetail
          latitude={latitude}
          longitude={longitude}
          api_key={api_key}
        />
      )}
    </div>
  );
};

export default Home;
