import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocaleStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocaleStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: newTask }) => {
      tasks.push(newTask);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true
      }
    },
    fetchExampleTasks: (state) => {
      state.loading = true
    },
    setExampleTasks: (state, { payload: tasks }) => {
      state.tasks.push(...tasks);
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false
    },

  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setExampleTasks,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsEveryTaskUndone = state => selectTasks(state).every(({ done }) => !done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsLoading = state => selectTasksState(state).loading === true;

export const getTaskById = (state, taskId) => selectTasks(state).find((task) => task.id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()))
}

export default tasksSlice.reducer;
