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

const Dot = ({ color }) => {
  const style = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
  };
  return <span style={style}></span>;
};

function App() {
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);

  const handleNew = async () => {
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
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#">edit</a>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
