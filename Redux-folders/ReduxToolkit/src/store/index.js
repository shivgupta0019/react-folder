
import {configureStore, createSlice} from "@reduxjs/toolkit"

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false
// }


const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal+=action.payload.num;
    },
    subtract: (state, action) => {
      state.counterVal-=action.payload.num;
    }
    
  }
})



const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers:{
    toggle: (state)=>{
      return state=!state
    }
  }
});

// const counterReducer = (store=INITIAL_VALUE,action) =>{
         
//         if(action.type === 'INCREMENT')
//         {
//           return {...store, counter: store.counter + 1};
//         }
//         else if(action.type === 'DICREMENT')
//         {
//           return {...store, counter: store.counter - 1};
//         }
//         else if(action.type === 'ADD')
//         {
//           return {...store, counter: store.counter + Number(action.payload.num)};
//         }
//         else if(action.type === 'SUB')
//         {
//           return {...store,  counter: store.counter -  Number(action.payload.num)};
//         }
//         else if(action.type === "PRIVACY")
//         {
//           return {...store, privacy: !store.privacy};
//         }
        

//   return store;
// }

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}});


export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;