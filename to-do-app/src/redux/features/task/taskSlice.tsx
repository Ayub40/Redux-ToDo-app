
import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    tasks: [
        {
            id: "asdfasdfasar",
            title: "Initialize Frontend",
            description: "Create Home Page and Routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High",
        },
        {
            id: "asdfasdfasar",
            title: "Create github repo",
            description: "Create github repo and commit",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium",
        },
    ],
    filter: "all",
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;

