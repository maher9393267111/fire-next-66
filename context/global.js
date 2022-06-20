import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendSignInLinkToEmail,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
  where,
  FieldPath,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth, db } from "../firebase";

const globalContext = createContext();

export const globaluse = () => {
  return useContext(globalContext);
};

const subContextComponent = ({ children }) => {
  const [name, setName] = useState("maher");
  const [villas, setVillas] = useState([]);

  // fetch villas from firebase

  useEffect(() => {
    onSnapshot(
      query(collection(db, "villas"), orderBy("name", "desc")),
      (snapshot) => {
        const productsArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setVillas(productsArr);
        console.log("All ---------> villas is fetched", productsArr, "");
      }
    );
  }, []);


// send disbled days to the firebase

const senddisabledDays = async(villaId,disabled) => {

console.log("disabledDays in global----->",disabled);

const userpath = doc(db, "villas", `${villaId}`);
const d = await (await getDoc(userpath)).data()?.disabledDays;

console.log("d in global----->",d);


const joinded = d.concat(disabled);

console.log("joinded in global----->",joinded);

await updateDoc(doc(db, "villas", villaId), {
    disabledDays: joinded,
  }).then(() => {

        console.log("disabledDays is updated");
    }
    ).catch(err => {
        console.log("error", err);
    }
    );


}

  const value = { name, villas,senddisabledDays };

  return (
    <globalContext.Provider {...{ value }}>{children}</globalContext.Provider>
  );
};

export default subContextComponent;
