import { ActionTypes } from '../constants/action-types'

const initistate = {
  Catagory_Products: [],
};

const Catagory_Products_Reducer = (state=initistate,action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_ALL_CATAGORY_PRODUCT:
            let data={
                Catagory_Products:[]
            }
            data.Catagory_Products.push(action.payload)
            return data;
        case ActionTypes.REMOVE_ALL_CATAGORY_PRODUCT:
            let removeDdata={
                Catagory_Products:[]
            }
            return removeDdata; 
        default: return state    
    }
};


export default Catagory_Products_Reducer;
