import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "./initialState";
import reducer from "./reducer";

const store = createStore(reducer, initialState);

export default Page => () => <Provider store={store}>{Page}</Provider>;
