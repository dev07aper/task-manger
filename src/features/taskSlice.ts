import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskType = {
  id: string;
  name: string;
  description: string;
  status: string;
};

type InitialTaskStateType = {
  tasks: TaskType[];
  loading: boolean;
};

const initialState: InitialTaskStateType = {
  tasks: [],
  loading: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state: any, action: PayloadAction<TaskType>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state: any, action: PayloadAction<TaskType>) => {
    
      state.tasks = state.tasks.filter(
        (item: TaskType) => item.id !== action.payload.id
      );
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
