import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSilce"
export default configureStore({
  reducer: {
    todos: todoReducer,
  }
})