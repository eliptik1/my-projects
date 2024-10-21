import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Free Code Camp React Projects</h1>
      <div className="card flex items-center flex-col">
        <h3>Accordion</h3>
        <div className="flex flex-col gap-3">
          <div className="accordion-btn">what are accordion components?</div>
          <div className="accordion-btn">what are they used for?</div>
        </div>
      </div>
    </>
  );
}

export default App;
