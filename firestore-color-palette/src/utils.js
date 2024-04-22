import db from "./firebase";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const handleNew = async () => {
  console.log("clicked");
  const name = prompt("enter color name");
  const value = prompt("enter color value");
  // const docRef = doc(db, "colors", "color001");
  // const payload = { name: "Black", value: "#000" };
  // await setDoc(docRef, payload);

  const collectionRef = collection(db, "colors");
  const payload = { name: name, value: value };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: ", docRef.id);
};

export const handleEdit = async (id) => {
  console.log(id);
  const newName = prompt("Edit name");
  const newValue = prompt("Edit value");
  const docRef = doc(db, "colors", id);
  const payload = { name: newName, value: newValue };
  await setDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id);
  await deleteDoc(docRef);
};

export const handleQueryDelete = async () => {
  const collectionRef = collection(db, "colors");
  const userInputName = prompt("Enter color name");
  const q = query(collectionRef, where("name", "==", userInputName));
  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(results);
  results.forEach((result) => {
    const docRef = doc(db, "colors", result.id);
    deleteDoc(docRef);
  });
};
