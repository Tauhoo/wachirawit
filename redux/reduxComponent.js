import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default Page => <Provider store={store}>{Page}</Provider>;
