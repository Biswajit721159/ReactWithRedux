import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
  name: 'allProducts',
  initialState: {
    products: [],
  },

  reducers: {
    REMOVE_PRODUCT: (state) => {
        state.products=[]
    },
    SET_PRODUCTS: (state,action) => {
      state.products=action.payload;
    },
  },
})


export const productmethod = productSlice.actions
const productReducer=productSlice.reducer
export default productReducer