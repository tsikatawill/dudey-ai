import React from "react";

const Countdown = () => {
  const [days, setDays] = React.useState(12);
  const [hours, setHours] = React.useState(8);
  const [mins, setMins] = React.useState(9);
  const [secs, setSecs] = React.useState(12);

  // React.useEffect(() => {
  //   const eta = new Date("December 25, 2022 00:00:00").getTime();
  //   const today = new Date().getTime();
  //   const gap = eta - today;

  //   // convert to milliseconds
  //   const second = 1000;
  //   const min = second * 60;
  //   const hr = min * 60;
  //   const day = hr * 24;

  //   let dayss = Math.floor(gap / day);
  //   let hourss = Math.floor((gap % day) / hr);
  //   let minss = Math.floor((gap % hr) / min);
  //   let secss = Math.floor((gap % min) / second);

  //   setInterval(() => {
  //     setDays(dayss);
  //     setHours(hourss);
  //     setMins(minss);
  //     setSecs(secss);
  //   }, 1000);
  //   console.log("Render");
  // });
  return (
    <div className="countdown my-4">
      <div className="time-display">
        <div className="days">
          <span className="value">{days}</span>
          <span className="desc">Days</span>
        </div>
        <div className="hours">
          <span className="value">{hours}</span>
          <span className="desc">Hours</span>
        </div>
        <div className="mins">
          <span className="value">{mins}</span>
          <span className="desc">Mins</span>
        </div>
        <div className="secs">
          <span className="value">{secs}</span>
          <span className="desc">Secs</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
