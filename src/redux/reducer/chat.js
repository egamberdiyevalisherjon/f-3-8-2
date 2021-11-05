import { NEW_MESSAGE } from "../action/types";

const initialState = {
  messages: [],
  friend: {},
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      localStorage["messages"] = JSON.stringify([
        ...state.messages,
        action.payload,
      ]);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "INITIAL_MESSAGES": {
      console.log(action.payload);
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
