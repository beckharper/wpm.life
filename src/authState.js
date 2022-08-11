import { createContext, useContext, useReducer } from "react";

export const useAuthReducer = () => useReducer(authReducer, initialAuthState);
export const useAuthContext = () => useContext(authContext);

const initialAuthState = {
  id: null,
  username: null,
  isAuthed: false,
};

const authContext = createContext();
export const AuthContextProvider = authContext.Provider;

function authReducer(state, action) {
  switch (action.type) {
    case "SET_ANON_USERNAME": {
      return {
        ...state,
        username: action.payload.username,
      };
    }

    default: {
      return state;
    }
  }
}
