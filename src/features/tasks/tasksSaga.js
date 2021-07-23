import { takeEvery, call, put, takeLatest, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, fetchExampleTasksError, selectTasks, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield delay(500);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    }
    catch (error) {
        yield call(alert, "Przykro mi 😞 Wystąpił problem z ładowaniem przykładowych zadań. Spróbuj ponownie później 😊");
        yield put(fetchExampleTasksError());
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}