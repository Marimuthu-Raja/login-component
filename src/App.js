import React from 'react'
import './App.css'
import Login from './Components/Login'
import Img from './Assets/background.jpg'
import Logo from './logo.svg'
function App(props) {

  return (
    <div>
      <Login 
        Img={Img}
        backColor="#034BB7"
        brand="React"
        brandColor="red"
        Logo={Logo}
        label1="Email"
        label2="Password"
        btnColor="red"
        loginUrl="http://localhost:8000/api/adminlogin/"/>
    </div>
  )
}

export default App