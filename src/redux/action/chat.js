import { NEW_MESSAGE } from "./types";

export const NewMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    payload: message,
  };
};
