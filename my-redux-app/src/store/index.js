import { configureStore,createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name:'counter',
  initialState:{counter:0},
  reducers:{
    increment(state,action){
      state.counter=state.counter+1;
    },
    decrement(state,action){
      state.counter=state.counter-1;
    },
    multiplyBy2(state,action){
      state.counter*=action.payload; 
    },
    divideBy3(state,action){
      state.counter/=action.payload; 
    }

  }
})

export const actions = counterSlice.actions;
export const store = configureStore({
  reducer: counterSlice.reducer
})