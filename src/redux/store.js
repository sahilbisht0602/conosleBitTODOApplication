import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const store = createStore(
  rootReducer,

  //extension to enable redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
