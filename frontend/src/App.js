import { Routes,Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import React, { useState,useEffect} from "react"
import Register from './Pages/Register';
import Login from './Pages/Login';
import EmployerLogin from './Pages/EmployerLogin';
import EmployerRegister from './Pages/EmployerRegister';
import Profile from './Pages/Profile'
import MultiActionAreaCard from './Pages/Cards';
import MultiAreaCard from './Pages/MyCards';

import axios from 'axios';
function App() {
const [loggedin,setloggedin]=useState(false)
const [name,setName]=useState("")


useEffect(()=>{
  const item=window.localStorage.getItem('userId')
  if(item){setloggedin(true)


  
  }
  

},[])

 
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/user/register" element={<Register/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/employer/register" element={<EmployerRegister/>}/>
      <Route path="/employer/login" element={<EmployerLogin/>}/>
    {loggedin&&(
      <>
      <Route path="/user/profile" element={<Profile name={name} setName={setName}/>}/>
      <Route path="/user/courses" element={<MultiActionAreaCard name={name} setName={setName}/>}/>
      <Route path="/user/mycourses" element={<MultiAreaCard  name={name} setName={setName}/>}/>
      </>)}
     

    </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
