import React from "react"
import "../style/Footer.scss"
import Logo from "../images/Logo__footer.png"
import Instagram from "../images/Instagram.png"
import Telegram from "../images/Telegram.png"
import {NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="Footer">
      <img className="Footer__logo" src={Logo} />
      <div className="Footer__link">
          <NavLink to='/about'>
            <a className="Footer__link-a">О нас</a>
          </NavLink> 
          <NavLink  to='/newproject'>
            <a className="Footer__link-a">Создать проект</a>
          </NavLink> 
          <NavLink  to='/join'>
            <a className="Footer__link-a">Присоединиться</a>
          </NavLink> 
          <NavLink  to='/'>
            <a className="Footer__link-a">Топ проектов</a>
          </NavLink>
          <NavLink  to='/faq'>
            <a className="Footer__link-a">FAQ</a>
          </NavLink>  
      </div>
      <div className="Footer__contacts">
          <h1>Контакты</h1>
          <div className="Footer__contacts-img">
          <NavLink  to='/'> <img src={Instagram} /> </NavLink>  
          <NavLink  to='/'>  <img src={Telegram} /></NavLink>  
          </div>
      </div>
    </div>
  )
};

export default Footer;
