import { ActionTypes } from "../constants/action-types";


const search = {
  search_Name: "",
};

export const Search_Reducer = (state = search, action) => {
  switch (action.type) 
  {
    case ActionTypes.SET_SEARCH: 
          let search = {
            search_Name: "",
          };
          search.search_Name = action.payload;
          return search;
    default:
      return state;
  }
};
