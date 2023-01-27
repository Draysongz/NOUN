import React from 'react'
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dash from './Dash'
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/studprof.php' element={<Dash />}/>
        </Routes>
      
      </Router>
    </div>
  )
}

export default App