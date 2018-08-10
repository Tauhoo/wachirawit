import htmlTemplate from "../components/htmlTemplate";
import reduxComponent from "../redux/reduxComponent";

const Template = htmlTemplate(<h1>ice</h1>);
const ReduxComponent = reduxComponent(<Template />);

export default () => <ReduxComponent />;
