import { createSlice } from '@reduxjs/toolkit';
const initialState = { counter: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => { state.counter += 1 },
    decreament: (state) => { state.counter>0?state.counter -= 1:state.counter=0 },
    reset: (state) => { state.counter = 0 }
  }
});
export const { increament, decreament, reset } = counterSlice.actions;
export default counterSlice.reducer;