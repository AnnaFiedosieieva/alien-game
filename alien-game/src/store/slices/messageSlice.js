import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { message: "React и Redux легко интегрируются, не так ли?" },
  reducers: {
    initilaMessage: (state) => {
      state.message = "React и Redux";
    },
  },
});

export default messageSlice.reducer;
export const { initilaMessage } = messageSlice.actions;
