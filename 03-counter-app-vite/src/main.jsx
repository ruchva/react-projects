import React from "react";
import ReactDOM from "react-dom/client";
import { HWApp } from "./HWApp.jsx";
import { FirstApp } from "./FirstApp.jsx";
import { CounterApp } from "./CounterApp.jsx";
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <HWApp /> */}
    <FirstApp title="Hola, soy Goku"/>
    <CounterApp value={ 100 }/>
  </React.StrictMode>
);
