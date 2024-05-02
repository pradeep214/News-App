
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Newscall from './Components/Newscall';

function App() {
  const [cat , setCat] = useState('general')
  return (
    <div className="App">
   <Navbar setCat={setCat}/>
   <Newscall cat={cat}/>
    </div>
  );
}

export default App;
