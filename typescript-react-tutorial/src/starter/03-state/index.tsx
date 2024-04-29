import { useState } from "react";

type Link = {
  id: number,
  url: string,
  text: string
}

const navLinks = [
  {
    id: 1,
    url: "url-1",
    text: "home"
  },
  {
    id: 2,
    url: "url-2",
    text: "about"
  },
  {
    id: 3,
    url: "url-3",
    text: "profile"
  }
]

function Component() {
  // const [text, setText] = useState("asdasd") 
  // const [number, setNumber] = useState(123) 
  // const [list, setList] = useState<string[]>([]) 
  const [links, setLinks] = useState<Link[]>(navLinks)
  return (
    <div>
      <h2>React & Typescript</h2>
      
      <button className="btn btn-center" onClick={()=> {
        // setText("text")
        // setNumber(555)
        // setList(["hello", "world"])
        setLinks([...links, {id: 4, url: "dasdasd", text: "contact"}])
        }
      }
        >click me</button>
    </div>
  );
}
export default Component;
