import {createSlice, PayloadAction} from '@reduxjs/toolkit';

/**
 * This is a example slice for redux store on how to use in the app
 */

// these are the values that are initialy stored
const defaultValue = {
  amount: 500,
};

const reduxExampleSlice = createSlice({
  name: 'reduxExample', // unique name for the slice
  initialState: defaultValue,
  reducers: {
    // first action this will increament the amount with the number passed as payload to the action
    addAmount: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
    // 2nd action to deduct amount
    subtractAmount: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
    },
    // 3rd action ...
    // no payload is required here
    resetAmount: state => {
      state.amount = defaultValue.amount;
    },
  }, // these are the rudcers actions are stored here
});

// exporting the actions
export const {addAmount, subtractAmount, resetAmount} =
  reduxExampleSlice.actions;

// export the the reducer as default
export default reduxExampleSlice.reducer;
