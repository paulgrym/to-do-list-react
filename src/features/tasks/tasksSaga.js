import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setExampleTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks"
import { nanoid } from "@reduxjs/toolkit";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    const exampleTasksWithIds = exampleTasks.map(exampleTask => ({
      ...exampleTask,
      id: nanoid(),
    }));
    yield put(setExampleTasks(exampleTasksWithIds));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak")
  }
};

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};
