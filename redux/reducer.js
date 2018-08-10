export default (state = {}, action) => {
  switch (action.type) {
    case "PAGE_STATE":
      return { page: action.state, ...state };
      break;
    default:
      return state;
  }
};
