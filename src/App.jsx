import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

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
      <button>New</button>
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
