import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import user from "./slices/userSlice";
import project from "./slices/projectSlice";
import task from "./slices/taskSlice";

const store = configureStore({
   reducer: {
      auth,
      user,
      project,
      task,
   },
});

export default store;
