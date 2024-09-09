import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 20,
};

export const cakeSlice = createSlice({
  initialState: initialState,
  name: "cake",
  reducers: {
    order1Cake: (state, action) => {
      // console.log(state, action, "state, action");
      state.numberOfCakes--;
    },
    orderSpecificNumberOfCakes: function (state, action) {
      console.log(state, action, "state, action");

      state.numberOfCakes = state.numberOfCakes - action.payload;
    },
    restockSpecificNumberOfCakes: (state, action) => {
      console.log(state, action, "state, action");
      state.numberOfCakes = state.numberOfCakes + action.payload;
    },
  },
});

export const {
  order1Cake,
  orderSpecificNumberOfCakes,
  restockSpecificNumberOfCakes,
} = cakeSlice.actions;
export const cakeReducer = cakeSlice.reducer;
