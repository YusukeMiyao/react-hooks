import React, { createContext, useState } from "react";
import "./App.css";
import { ComponentsC } from "./components/ComponentsC";
import { Counter } from "./components/Counter";
import { DataFeatch } from "./components/DataFeatch";
import { DataFetchById } from "./components/DataFetchById";
import { EffectHooks } from "./components/EffectHooks";
import { FormHooks } from "./components/FormHooks";
import { ItemHooks } from "./components/ItemHooks";
import { MouseEventEffect } from "./components/MouseEventEffect";

export const UserContext = createContext({} as any);
export const LanguageContext = createContext({} as any);

function App() {
  const [user, setUser] = useState({ name: "yamada", age: "32" });
  const [language, setLanguage] = useState("日本語");
  return (
    <div className="App">
      {/* <Counter />
      <FormHooks />
      <ItemHooks /> */}
      {/* <EffectHooks /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFeatch /> */}
      {/* <DataFetchById /> */}
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentsC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
