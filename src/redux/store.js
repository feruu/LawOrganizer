import { configureStore } from "@reduxjs/toolkit";
import boardsReducer, { saveToLocalStorage } from "./boardsSlice";


const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveToLocalStorage),
});

export default store
