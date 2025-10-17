import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { postsApi } from "../../../post/api/postsApi";
import type { Post } from "../../../post/types";
import type { RootState } from "../../../../app/providers/store/store";

const postsAdapter = createEntityAdapter<Post>();

const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        postsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export default postSlice.reducer;

export const postsSelectors = postsAdapter.getSelectors(
  (state: RootState) => state.posts
);
