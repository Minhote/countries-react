import { configureStore } from "@reduxjs/toolkit";
import countriesAllSlice from "./countriesAllSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: { theme: themeSlice.reducer, countries: countriesAllSlice.reducer },
});
