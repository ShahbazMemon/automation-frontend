import { createSlice } from "@reduxjs/toolkit";

type AppState = {
  siteName: string;
};

const initialState: AppState = {
  siteName: "Expedey",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default appSlice.reducer;
