import React from 'react'
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dash from './Dash'
import Result from './Result'
import Err from './Err'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' exact element={<Home/>}/>
          <Route path='/studprof' element={<Dash />}/>
          <Route path='/skmakoj' element={<Result/>} />
          <Route path='/err' element={<Err />}/>
        </Routes>
      
      </Router>
    </div>
  )
}

export default App
