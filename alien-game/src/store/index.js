import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import objectReducer from "./slices/objectSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    object: objectReducer,
  },
});
