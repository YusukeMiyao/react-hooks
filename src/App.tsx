import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { DataFeatch } from "./components/DataFeatch";
import { DataFetchById } from "./components/DataFetchById";
import { EffectHooks } from "./components/EffectHooks";
import { FormHooks } from "./components/FormHooks";
import { ItemHooks } from "./components/ItemHooks";
import { MouseEventEffect } from "./components/MouseEventEffect";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <FormHooks />
      <ItemHooks /> */}
      {/* <EffectHooks /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFeatch /> */}
      <DataFetchById />
    </div>
  );
}

export default App;
