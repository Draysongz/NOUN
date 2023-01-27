import React from 'react'
import main from './assets/main.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    function click(){
        navigate('/studprof.php')
    }
  return (
    <div>
        <img onClick={click} className='home' src={main} alt="text" width='1340' />
    </div>
  )
}

export default Home