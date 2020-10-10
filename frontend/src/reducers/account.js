import { ACCOUNT } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_ACCOUNT = { loggedIn: false }; //用來判斷是否login

const account = (state = DEFAULT_ACCOUNT, action) => {
  switch (action.type) {
    case ACCOUNT.FETCH:
      return { ...state, status: fetchStates.fetching };
    case ACCOUNT.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case ACCOUNT.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: true,
      };
    case ACCOUNT.FETCH_LOGOUT_SUCCESS:
      return {
          ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: false,
      }
    case ACCOUNT.FETCH_AUTHENTICATED_SUCCESS:
      return {
      ...state,
      status:fetchStates.success,
      message:action.message,
      loggedIn:action.authentcated
      }
    default:
      return state;
  }
};

export default account;