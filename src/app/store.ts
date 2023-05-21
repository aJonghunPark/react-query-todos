import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import taskReducer from "../features/task/taskSlice";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
