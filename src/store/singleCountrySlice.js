import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  borders: [],
};

const singleCountrySlice = createSlice({
  name: "singleCountry",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.value = action.payload.value;
    },
    clearValue: (state) => {
      state.value = [];
    },
    setBorders: (state, action) => {
      state.borders = action.payload.borders;
    },
    clearBorders: (state) => {
      state.borders = [];
    },
  },
});

export const { setCountry, clearValue, setBorders, clearBorders } =
  singleCountrySlice.actions;

export default singleCountrySlice;
