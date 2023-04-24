import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import axios from "axios"
export default function EmployerLogin() {

    const[user,setUser]=useState({
       
        email:"",
        password:"",
       
      
      })
      const val = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        //console.log(value,name);
        setUser(() => {
          return {
            ...user,
            [name]: value,
          };
        });
      };
      
      
          const handlChange = async (e) => {
              e.preventDefault();
              const {email, password } = user;
              if (email && password) {
                  await axios.post("http://localhost:4000/boss/login", user).then((res) => {
                      alert(res.data.message);
                      console.log(res.data.user)
                      window.localStorage.setItem("userId",`${res.data.employee._id}`)
                      window.location.reload();
                  });
            console.log(user)
              } else {
                  alert("Invalid Input");
              }
          };


  return (
    <Container>
        <div>
        <section>
    <div class="form-box">
        <div class="form-value">
            <form action="">
                <h2>Login</h2>
                <div class="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email"  name="email" onChange={val} required/>
                    <label for="">Email</label>
                </div>
                <div class="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" onChange={val} required/>
                    <label for="">Password</label>
                </div>
              
                <button onClick={handlChange}>Log in</button>
                <div class="register">
                    <p>Don't have a account <Link to ="/employer/register">Register</Link></p>
                </div>
            </form>
        </div>
    </div>
</section>
        </div>
    </Container>
  )
}
const Container= styled.div`
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap'); */
background:url('images/doodle1.jpg');
background-size:cover;


section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    
    background:rgba(0,0,0,0.7);
   
    background-position: center;
    background-size: cover;
}
.form-box{
    position: relative;
    width: 400px;
    height: fit-content;
    background: white;
    border: 2px solid #041706;
padding:80px 0px;
    
    box-shadow: 10xp 10px 10px rgba(131, 33, 33, 0.5);
    border-radius: 20px;
    /* backdrop-filter: blur(15px); */
    display: flex;
    justify-content: center;
    align-items: center;

}
h2{
    font-size: 2em;
    color:#034534;
    text-align: center;
}
.inputbox{
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #034534;
}
.inputbox label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #034534;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
}
input:focus ~ label,
input:valid ~ label{
top: -5px;
}
.inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding:0 35px 0 5px;
    color: #034534;
}
.inputbox ion-icon{
    position: absolute;
    right: 8px;
    color: #034534;
    font-size: 1.2em;
    top: 20px;
}
.forget{
    margin: -15px 0 15px ;
    font-size: .9em;
    color: #034534;
    display: flex;
    justify-content: space-between;  
}

.forget label input{
    margin-right: 3px;
    
}
.forget label a{
    color: #034534;
    text-decoration: none;
}
.forget label a:hover{
    text-decoration: underline;
}
button{
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #034534;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    /* font-weight: 600; */
    color:white;
}
.register{
    font-size: .9em;
    color: #034534;
    text-align: center;
    margin: 25px 0 10px;
}
.register p a{
    text-decoration: none;
    color: #034534;
    font-weight: 600;
}
.register p a:hover{
    text-decoration: underline;
}
`


