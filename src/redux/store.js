import { createStore } from "redux";

import Combine_Reducer from "./reducers/Combine_Reducer";

const store = createStore(
  Combine_Reducer,
);

export default store;
