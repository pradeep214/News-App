import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Newscall from "./Components/Newscall";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Newscall />
    </div>
  );
}

export default App;
