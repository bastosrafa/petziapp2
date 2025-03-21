import { createContext } from "react";
import { useDocument } from "@/hooks/useDocument";
import Loading from "@/components/Loading";

export const UserDocContext = createContext();

export function UserDocProvider({ children, user }) {
<<<<<<< HEAD
  const { document: userDoc, isLoading } = useDocument("users", user.uid);

  if (isLoading) return <Loading />;
=======
  const { document: userDoc } = useDocument("users", user.uid);

  if (!userDoc) return <Loading />;
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

  return (
    <UserDocContext.Provider value={{ userDoc }}>
      {children}
    </UserDocContext.Provider>
  );
}
