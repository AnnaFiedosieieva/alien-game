import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../../utils/formulas";

const objectSlice = createSlice({
  name: "object",
  initialState: { angle: 45 },
  reducers: {
    moveObject: (state, action) => {
        if (!action.payload) return state;
    //   let angle;
    //   document.addEventListener("mousemove", (event) => {
    //     angle = calculateAngle(0, 0, event.clientX, event.clientY);
    //   });
        const { x, y } = action.payload;
        const angle = calculateAngle(0, 0, x, y);
      return {
        ...state,
        angle,
      };
    },
  },
});

export default objectSlice.reducer;
export const { moveObject } = objectSlice.actions;
