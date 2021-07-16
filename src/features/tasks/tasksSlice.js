import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        removeAllTasks: ({ tasks }) => {
            tasks.splice(0);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        setAllUnDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = false;
            }
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    removeAllTasks,
    setAllDone,
    setAllUnDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

const selectTaskState = state => state.tasks;

export const selectTasks = state => selectTaskState(state).tasks;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectLoading = state => selectTaskState(state).loading;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsEveryTaskUnDone = state => selectTasks(state).every(({ done }) => !done);


export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};


export default tasksSlice.reducer;