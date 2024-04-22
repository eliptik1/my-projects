import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";

import Dot from "./Dot";
import {
  handleNew,
  handleEdit,
  handleDelete,
  handleQueryDelete,
} from "./utils";

function App() {
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);

  useEffect(() => {
    onSnapshot(collection(db, "colors"), (snapshot) => {
      const myData = [];
      snapshot.docs.forEach((doc) => {
        myData.push({ ...doc.data(), id: doc.id });
      });
      setColors(myData);
    });
  }, []);

  console.log(colors);
  return (
    <div>
      <button onClick={handleNew}>New</button>
      <button onClick={handleQueryDelete}>Query Delete</button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <button onClick={() => handleEdit(color.id)}>edit</button>
            <button onClick={() => handleDelete(color.id)}>delete</button>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
