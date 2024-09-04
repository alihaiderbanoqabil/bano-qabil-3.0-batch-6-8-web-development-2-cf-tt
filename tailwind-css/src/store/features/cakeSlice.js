import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   numOfCakes: 20,
// };

// const cakeSlice = createSlice({
//   initialState: {
//     numOfCakes: 20,
//   },
//   name: "cake",
//   reducers: {
//     ordered: (state, action) => {
//       state.numOfCakes--;
//     },
//     restocked: (state, action) => {
//       state.numOfCakes = state.numOfCakes + action.payload;
//     },
//     // getUser: () => {},
//   },
// });

// export default cakeSlice.reducer;
// export const cakeActions = cakeSlice.actions;

const initialState = {
  numberOfCakes: 20,
};

export const cakeSlice = createSlice({
  initialState: initialState,
  name: "cake",
  reducers: {
    order1Cake: (state, action) => {
      state.numberOfCakes--;
    },
    orderSpecificNumberOfCakes: function (state, action) {
      state.numberOfCakes = state.numberOfCakes - action.payload;
    },
    restockSpecificNumberOfCakes: (state, action) => {
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
