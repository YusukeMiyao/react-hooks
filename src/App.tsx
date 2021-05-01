import React, { createContext, useState, useReducer, useEffect } from "react";
import "./App.css";
import { Check } from "./components/Check";
import { FocusInput } from "./components/FocusInput";
import { Count } from "./components/Count";
import { DocTitleUpdateOne } from "./components/DocTitleUpdateOne";
import { DocTitleUpdateTwo } from "./components/DocTitleUpdateTwo";
import { Form } from "./components/Form";
function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      {/* <DocTitleUpdateOne />
      <DocTitleUpdateTwo /> */}
      <Form />
    </div>
  );
}

export default App;
