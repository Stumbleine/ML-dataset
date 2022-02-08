import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: {
    mode: "dark",
  },
  languaje: {
    spanish: false,
    english: true,
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setThemeMode: (state) => {
      let m = state.theme.mode === "light" ? "dark" : "light";
      state.theme.mode = m;
    },
  },
});

export const { setThemeMode } = settingSlice.actions;
export default settingSlice.reducer;
