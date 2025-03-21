import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
<<<<<<< HEAD
import { auth } from "../firebase/config";
=======
import { auth } from "../firebase/firebaseConfig";
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  // const foo = useMemo(() => ({ ...state, dispatch }), []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
