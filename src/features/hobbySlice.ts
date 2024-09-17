import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HobbyType = {
  id: string;
  name: string;
  preference: string;
};

type InitialHobbyStateType = {
  hobbys: HobbyType[];
};

const initialState: InitialHobbyStateType = {
  hobbys: [],
};

const hobbySlice = createSlice({
  name: "hobby",
  initialState,
  reducers: {
    addHobby: (state, action: PayloadAction<HobbyType>) => {
      state.hobbys.push(action.payload);
    },
    removeHobby: (state, action: PayloadAction<any>) => {
    state.hobbys = state.hobbys.filter(
        (item: HobbyType) => item?.id !== action.payload.id
      );
    },
  },
});

export const { addHobby, removeHobby } = hobbySlice.actions;

export default hobbySlice.reducer;
