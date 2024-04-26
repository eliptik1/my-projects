import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name="ali" id={123}>

      </Component>
      <Component name="ali" id={456} />
    </main>
  );
}

export default App;
