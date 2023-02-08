import React from 'react'
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dash from './Dash'
import Result from './Result'
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/studprof' element={<Dash />}/>
          <Route path='/skmakoj' element={<Result/>} />
        </Routes>
      
      </Router>
    </div>
  )
}

export default App
