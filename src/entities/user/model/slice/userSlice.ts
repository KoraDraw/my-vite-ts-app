import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { RootState } from "../../../../app/providers/store/store";
import type { User } from "../../model/types";

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      usersAdapter.addOne(state, action.payload);
    },
    addUsers(state, action) {
      usersAdapter.addMany(state, action.payload);
    },
  },
});

export const { addUser, addUsers } = userSlice.actions;
export default userSlice.reducer;
export const usersSelectors = usersAdapter.getSelectors(
  (state: RootState) => state.users
);
