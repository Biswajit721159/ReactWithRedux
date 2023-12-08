import { createSlice } from '@reduxjs/toolkit'


const CatagorySlice = createSlice({
  name: 'Catagory',
  initialState: {
    Catagory: [],
  },

  reducers: {
    ADD_PRODUCT_CATAGORY: (state,action) => {
        state.Catagory.push(action.payload)
    },
    
  },
})


export const catagorymethod = CatagorySlice.actions
const catagoryReducer=CatagorySlice.reducer
export default catagoryReducer