import { configureStore } from "@reduxjs/toolkit";
import HelloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
const store = configureStore({
    reducer: {
        HelloReducer,
        counterReducer,
        addReducer,
        todosReducer,
    },
});
export default store;