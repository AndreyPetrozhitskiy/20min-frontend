import React from "react"
import "../style/header.scss"
import Logo from "../images/Logo__header.png"
import Lupa from "../images/Lupa.png"
import Usericon from "../images/usericon.png"
import {NavLink } from 'react-router-dom'
{/* <NavLink to='/basket'></NavLink> */}
const Header = ({ openModal }) => {
  return (
    <div className="Header">
      <div className="Header__logo">
      <NavLink to='/'>
        <img src={Logo} />
      </NavLink> 
      </div>
      
      <div className="Header__nav">
        <div className="Header__nav-link">
          <NavLink to='/about'>
            <a>О нас</a>
          </NavLink> 
          <NavLink to='/newproject'>
            <a>Создать проект</a>
          </NavLink> 
          <NavLink to='/join'>
            <a>Присоединиться</a>
          </NavLink> 
         
            <input onClick={() => openModal("login")} type="button" value="Войти" />
          
        </div>

        <div className="Header__nav-search">
          <div className="Header__nav-search--bar">
            <input type="text" placeholder="Поиск"/>
            <img src={Lupa} />
          </div>
          <NavLink to='/profile'><img src={Usericon} /></NavLink>
        </div>
      </div>
   
   
    </div>
  )
};

export default Header;
