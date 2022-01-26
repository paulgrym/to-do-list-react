import { takeLatest, takeEvery, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setExampleTasks, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks"
import { nanoid } from "@reduxjs/toolkit";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

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
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak");
  }
};

function* saveTasksInLocalStorageHandeler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandeler);
};
