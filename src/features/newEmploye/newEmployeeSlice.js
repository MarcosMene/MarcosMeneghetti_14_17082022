import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mocks_data/MOCK_DATA.json";

const initialState = {
  arrayEmployee: [...MOCK_DATA],
  // firstname: "",
  // lastname: "",
  // datebirth: "",
  // startdate: "",
  // street: "",
  // city: "",
  // countrystate: "",
  // zipcode: "",
  // departament: "",
  isLoading: false,
  isSuccess: false,
};

export const newEmployeeSlice = createSlice({
  name: "newEmployee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // state.firstname = action.payload;
      // state.lastname = action.payload;
      // state.datebirth = action.payload;
      // state.startdate = action.payload;
      // state.street = action.payload;
      // state.city = action.payload;
      // state.zipcode = action.payload;
      // state.departament = action.payload;

      state.arrayEmployee.push(action.payload);
    },
  },
});

export const { addEmployee } = newEmployeeSlice.actions;

export default newEmployeeSlice.reducer;
