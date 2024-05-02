import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import Navbar from './Navbar'
function Home() {
  return (
    <div>
        <Router>
            <Navbar

/>        <Routes>
    <Route exact path='/Home' element={<Home /> }/>
</Routes>

</Router>
    </div>
  )
}

export default Home