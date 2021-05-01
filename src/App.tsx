import React, { createContext, useState, useReducer, useEffect } from "react";
import "./App.css";
import { Check } from "./components/Check";
import { FocusInput } from "./components/FocusInput";
import { Count } from "./components/Count";
function App() {
  return (
    <div className="App">
      <h1>useRef</h1>
      {/* <FocusInput /> */}
      <Count />
    </div>
  );
}

export default App;
