import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  value: {},
};

const countriesAllSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setAll: (state, action) => {
      state.value = action.payload.value;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { setAll, startLoading } = countriesAllSlice.actions;

export default countriesAllSlice;
