import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mocks_data/MOCK_DATA.json";

//start array employee array with mock data
const initialState = {
  arrayEmployee: [...MOCK_DATA],
};

export const newEmployeeSlice = createSlice({
  name: "newEmployee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.arrayEmployee.push(action.payload);
    },
  },
});

export const { addEmployee } = newEmployeeSlice.actions;

export default newEmployeeSlice.reducer;
