import React from "react";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CannonBall from "./CannonBall";
import CurrentScore from "./CurrentScore";

const Canvas = (props) => {
  const { angle, trackMouse } = props;
  // console.log(angle);
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight,
  ];
  return (
    <svg
      id="aliens-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>

      <Sky />
      <Ground />
      <CannonPipe rotation={angle} />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={15} />
      {/* <circle cx={0} cy={0} r={50} /> */}
    </svg>
  );
};

export default Canvas;
