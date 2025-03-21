import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
<<<<<<< HEAD
import { auth, db } from "../firebase/config";
=======
import { auth, db } from "../firebase/firebaseConfig";
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // Sign the user out
    try {
      const { uid } = user;
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, { online: false });

      await signOut(auth);

      // Dispatch logout action
      dispatch({ type: "LOGOUT" });

      // Update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => () => setIsCancelled(true), []);

  return { logout, error, isPending };
};
