import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./../features/taskSlice";
import hobbyReducer from "./../features/hobbySlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
    hobby: hobbyReducer,
  },
});

// type store

//- we are going to export two infterred type from store.js root state type and appdispatch type

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
