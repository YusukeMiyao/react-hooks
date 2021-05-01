import React, { createContext, useState, useReducer, useEffect } from "react";
import "./App.css";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { ComponentC } from "./components/ComponentC";
import { Counter } from "./components/Counter";
import { CounterReducer } from "./components/CounterReducer";
import { DataFeatch } from "./components/DataFeatch";
import { DataFetchById } from "./components/DataFetchById";
import { EffectHooks } from "./components/EffectHooks";
import { FormHooks } from "./components/FormHooks";
import { ItemHooks } from "./components/ItemHooks";
import { MouseEventEffect } from "./components/MouseEventEffect";
import axios from "axios";

export const UserContext = createContext({} as any);
export const LanguageContext = createContext({} as any);

export const CountContext = createContext({} as any);
const initialState = {
  loading: true,
  error: "",
  post: {},
};
// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "increment1":
//       return { ...state, firstCounter: state.firstCounter + action.value };
//     case "decrement1":
//       return { ...state, firstCounter: state.firstCounter - action.value };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "データの取得に失敗しました",
      };
    default:
      return state;
  }
};

function App() {
  // const [coun, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res: any) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div className="App">
      {/* <h1>カウント：{count.firstCounter}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }} */}
      {/* > */}
      {/* <Counter />
      <FormHooks />
    <ItemHooks /> */}
      {/* <EffectHooks /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFeatch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
        <ComponentsC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}
      {/* <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      <h1>{state.loading ? "Loading..." : state.post.title}</h1>
      <h2>{state.error ? state.error : null}</h2>
    </div>
  );
}

export default App;
