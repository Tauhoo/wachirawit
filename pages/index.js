import htmlTemplate from "../components/htmlTemplate";
import reduxComponent from "../redux/reduxComponent";
import Body from "../components/body"

const Template = htmlTemplate(<Body/>);
const ReduxComponent = reduxComponent(<Template />);

export default () => <ReduxComponent />;
