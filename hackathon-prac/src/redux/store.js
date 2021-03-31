import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./storage";

/* create store ------------------------------------------------------------- */

const store = createStore(
  // 루트 리듀서 (리듀서 병합)
  rootReducer
  // 미들웨어 적용
);

/* store provider wrapper component ----------------------------------------- */

export const StoreProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
