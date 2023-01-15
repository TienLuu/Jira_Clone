import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../services/userAPI";

const initialState = {
   users: null,
   loading: false,
   error: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async (keyword) => {
   try {
      const data = await userAPI.getUsers(keyword);
      return data;
   } catch (error) {
      throw error;
   }
});

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getUsers.pending, (state, action) => {
         return { ...state, loading: true, error: null };
      });
      builder.addCase(getUsers.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            users: action.payload,
            error: null,
         };
      });
      builder.addCase(getUsers.rejected, (state, action) => {
         return { ...state, loading: false, error: action.error.message };
      });
   },
});

export default userSlice.reducer;
