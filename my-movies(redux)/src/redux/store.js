import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./storage";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;

/* store provider wrapper component */
export const StoreProvider = (props) => {
  return <Provider store={store}>{props.children} </Provider>;
};
