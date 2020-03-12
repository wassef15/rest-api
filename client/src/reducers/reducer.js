
import { GET_CONTACT , ADD_CONTACT } from "../actions/types";

var initialState = { contacts: [] };
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { ...state, contacts: action.payload };
    case ADD_CONTACT:
      return { ...state, contacts: state.contacts.concat(action.payload) };
      
    default:
      return state;
  }
};

export default Reducer;