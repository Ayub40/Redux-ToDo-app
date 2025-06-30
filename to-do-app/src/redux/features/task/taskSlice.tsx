import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
    // filter: "all",
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
}

const initialState: InitialState = {
    tasks: [
        {
            id: "asdf",
            title: "Initialize Frontend",
            description: "Create Home Page and Routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high",
        },
        {
            id: "asdfa",
            title: "Create github repo",
            description: "Create github repo and commit",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "medium",
        },
    ],
    filter: "all",
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        // task create korsi
        addTask: (state, action: PayloadAction<ITask>) => {

            const taskData = createTask(action.payload);
            state.tasks.push(taskData);

            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false,
            // }
            // state.tasks.push(taskData);
        },

        // id and isCompleted ta create korsi , jehoto id r isCompleted ta amra from e create kortesi na
        // eta TaskCard e implement korte hobe
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task) =>
                task.id === action.payload
                    ? (task.isCompleted = !task.isCompleted)
                    : task
            );
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"low" | "medium" | "high">) => {
            state.filter = action.payload;
        },
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;




