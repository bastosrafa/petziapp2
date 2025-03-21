import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
<<<<<<< HEAD
import { db } from "../firebase/config";
=======
import { db } from "../firebase/firebaseConfig";
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

export const useDocument = (coll, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

  useEffect(() => {
    if (!coll || !id) return;

<<<<<<< HEAD
    setIsLoading(true);
=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
    const unsub = onSnapshot(
      doc(db, coll, id),
      (docSnapshot) => {
        if (docSnapshot.data()) {
          setDocument({ ...docSnapshot.data(), id: docSnapshot.id });
          setError(null);
        } else {
          setError("Dados não encontrados.");
          setDocument(undefined);
          console.log(`Dados não encontrados. Collection: ${coll}, ID: ${id}`);
        }
<<<<<<< HEAD
        setIsLoading(false);
=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
      },
      (err) => {
        setError(err.message);
        setDocument(undefined);
        console.log(err.message);
        console.log("Erro ao ler documento da coleção:", coll, "com ID:", id);
<<<<<<< HEAD
        setIsLoading(false);
=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
      }
    );

    return () => unsub();
  }, [coll, id]);

<<<<<<< HEAD
  return { document, error, isLoading };
=======
  return { document, error };
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
};
