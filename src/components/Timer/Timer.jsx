import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { GlobalContext } from "../../context/Context";

const minuteSeconds = 60;
const hourSeconds = 300;

const timerProps = {
  isPlaying: true,
  size: 1,
  strokeWidth: 1,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      {/* <div>{dimension}</div> */}
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

export default function Timer() {
  let { dispatch } = useContext(GlobalContext);
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 300; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;

  return (
    <div className="App" style={{ display: "flex" }}>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#2ecc71"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds,
          !(remainingTime - totalElapsedTime > minuteSeconds)
            ? dispatch({
                type: "timeOut",
                payload: {
                  timeOut: true,
                },
              })
            : "",
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      :&nbsp;
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#2ecc71"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0,
        ]}
      >
        {({ elapsedTime }) => renderTime("", getTimeSeconds(elapsedTime))}
      </CountdownCircleTimer>
    </div>
  );
}
