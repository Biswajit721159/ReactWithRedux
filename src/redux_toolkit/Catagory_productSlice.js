import { createSlice } from '@reduxjs/toolkit'


const CatagorySlice = createSlice({
  name: 'Catagory_Products',
  initialState: {
    Catagory_Products: [],
  },

  reducers: {
    ADD_ALL_CATAGORY_PRODUCT: (state,action) => {
        state.Catagory_Products = action.payload;
    },
    

  },
})


export const catagorymethod = CatagorySlice.actions
const catagoryReducer=CatagorySlice.reducer
export default catagoryReducer