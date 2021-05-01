import React, { createContext, useState, useReducer, useEffect } from "react";
import "./App.css";
import { Check } from "./components/Check";

function App() {
  return (
    <div className="App">
      <Check />
    </div>
  );
}

export default App;
