import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { firstname: "Stephen", lastname: "Strange", age: 45 },

  reducers: {
    changeFirstname: (state, payload) => {
      console.log(payload);
      state.firstname = payload.payload;
    },
    changeLastname: (state, payload) => {
      state.lastname = payload.payload;
    },
    changeAge: (state, payload) => {
      state.age = payload.payload;
    },
  },
});

export const { changeFirstname, changeLastname, changeAge } =
  profileSlice.actions;
export default profileSlice.reducer;
