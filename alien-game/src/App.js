import React from "react";
import Canvas from "./components/Canvas";
// import { connect } from "react-redux";
import { moveObject } from "./store/slices/objectSlice";
// import { useEffect } from "react";
import { getCanvasPosition } from "./utils/formulas";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const angle = useSelector((store) => store.object.angle);

  // useEffect(() => {
  //   setInterval(() => {
  //     moveObject((e) => getCanvasPosition(e));
  //     // console.log(canvasMousePosition);
  //   }, 10);
  // });

  return (
    <div className="App">
      <Canvas angle={angle} trackMouse={(e) => {
          dispatch(moveObject(getCanvasPosition(e)));
        }} />
    </div>
  );
};

export default App;
