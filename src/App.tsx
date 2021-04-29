import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { FormHooks } from "./components/FormHooks";
import { ItemHooks } from "./components/ItemHooks";

function App() {
  return (
    <div className="App">
      <Counter />
      <FormHooks />
      <ItemHooks />
    </div>
  );
}

export default App;
