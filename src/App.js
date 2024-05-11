import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Newscall from "./Components/Newscall";
import { Route, Routes,  } from "react-router";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
 
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/general" element={<Newscall cat="general"/>} />
        <Route path="/business" element={<Newscall cat="business"/>} />
        <Route path="/sports" element={<Newscall cat="sports"/>} />
        <Route path="/science" element={<Newscall cat="science"/>} />
        <Route path="/entertainment" element={<Newscall cat="entertainment"/>} />
        <Route path="/technology" element={<Newscall cat="technology"/>} />
        </Routes>
    

      
    </div>
  );
}

export default App;
