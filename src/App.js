import "./App.css";
import React from "react";
import Tabs from "./Tabs/Tabs";
import headshot from "./Images/headshot.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="headshot" alt="headshot" />
        <div className="headerText">
          <h1>
            Emily Garner
          </h1>
      </div>
      </header>
      <Tabs />  
    </div>
  );
}
export default App;
