import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [timeNow, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // let timeNow = new Date();

  let currentTime = new Date();

  // Extract hours, minutes, and seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Add leading zero if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let amPm;
  if (hours < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  // Display the current time in a div with id "currentTime"

  return (
    // <p>
    //   This is the current time: {hours}:{minutes}:{seconds}-{amPm}
    // </p>
    <p className="fw-bolder">
      This is the current time:{timeNow.toLocaleDateString()} -
      {timeNow.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
