import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    _id: "",
    username: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, actions) => {
      state.value = actions.payload;
    },
    resetUser: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
