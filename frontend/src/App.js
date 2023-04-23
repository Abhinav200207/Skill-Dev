import { Routes,Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import React from "react"
import Register from './Pages/Register';
import Login from './Pages/Login';
import EmployerLogin from './Pages/EmployerLogin';
import EmployerRegister from './Pages/EmployerRegister';
import Profile from './Pages/Profile'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/user/register" element={<Register/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/employer/register" element={<EmployerRegister/>}/>
      <Route path="/employer/login" element={<EmployerLogin/>}/>
      <Route path="/user/profile" element={<Profile/>}/>

    </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
