import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  value: [],
  init: 0,
  end: 0,
  fetched: false,
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
    setFetched: (state) => {
      state.fetched = true;
    },
    setInitAndEnd: (state, action) => {
      state.init = action.payload.init;
      state.end = action.payload.end;
    },
    // setToShow: (state, action) => {
    //   state.toShow = action.payload.toShow;
    // },
  },
});

export const { setAll, startLoading, setToShow, setFetched, setInitAndEnd } =
  countriesAllSlice.actions;

export default countriesAllSlice;
