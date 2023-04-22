import { Routes,Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import React from "react"
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>

   
      
    </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
