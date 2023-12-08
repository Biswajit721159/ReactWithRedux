import { ActionTypes } from '../constants/action-types'

const initistate = {
  Catagory: [],
};

const Catagory_Reducer = (state=initistate,action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_PRODUCT_CATAGORY:
            let data={
                Catagory:[]
            }
            data.Catagory.push(action.payload)
            return data;
        default: return state    
    }
};


export default Catagory_Reducer;
