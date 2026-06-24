import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usesSlice";
import { usersMiddleware } from "./useMiddleware";

export const store = configureStore({
  reducer: {
    academicList: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersMiddleware),
});
