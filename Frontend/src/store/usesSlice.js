import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  academicList: [],
  academicFindOne: [],
  academicCreateData: [],
  isLoading: false,
  isCreating: false,
  error: "",
};

const academicListSlice = createSlice({
  name: "academicList",
  initialState,
  reducers: {
    fetchAcademicRequested(state) {
      state.isLoading = true;
      state.error = "";
    },
    fetchAcademicSucceeded(state, action) {
      state.isLoading = false;
      state.academicList = action.payload;
    },
    fetchFindOneAcademicSucceeded(state, action) {
      state.isLoading = false;
      state.academicFindOne = action.payload;
    },
    fetchcademiAcFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createAcademicRequested(state) {
      state.isCreating = true;
      state.error = "";
    },
    createAcademicSucceeded(state) {
      state.isCreating = false;
    },
    createAcademicFailed(state, action) {
      state.isCreating = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAcademicRequested,
  fetchAcademicSucceeded,
  fetchFindOneAcademicSucceeded,
  fetchcademiAcFailed,
  createAcademicRequested,
  createAcademicSucceeded,
  createAcademicFailed,
} = academicListSlice.actions;

export default academicListSlice.reducer;
