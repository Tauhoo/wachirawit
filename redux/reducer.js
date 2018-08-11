export default (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_PAGE_STATE":
      return Object.assign({}, state, { page: action.state });
      break;
    default:
      return state;
  }
};
