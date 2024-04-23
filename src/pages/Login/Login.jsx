import React from 'react'
import Login from '../../components/forms/forms.jsx';
import Navbar from "../../components/navbar/Navbar.jsx";
import Photo from "../../assets/SignupPage.svg"

export default function login() {
  return (
    <>
    <Navbar></Navbar>
    <div className='flex aadharForm gap-20 items-center'>
    <Login isLogin={true}></Login>
    <img src={Photo}></img>
    </div>
    
    </>
  )
}
