import React, { useState } from "react";

const Clock = () => {
  const now = new Date();
  const currentHour = now.getHours();

  const [time, setTime] = useState(now.toLocaleTimeString("en-GB"));

  let greetings;
  if (currentHour >= 5 && currentHour <= 12) {
    greetings = "Good Morning  ☕";
  } else if (currentHour > 12 && currentHour <= 18) {
    greetings = "Good Afternoon  🍽️";
  } else {
    greetings = "Good Night  😴";
  }

  setInterval(() => {
    const now = new Date().toLocaleTimeString("en-GB");

    setTime(now);
  }, 1000);

  return (
    <div>
      <h4>{greetings}</h4>
      <h5> Current time is : {time}</h5>
    </div>
  );
};

export default Clock;
