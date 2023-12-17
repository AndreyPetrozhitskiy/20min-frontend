import React from "react"
import "../style/Main.scss"
import MainSlider from "./UI Component/MainSlider";
import MainOne from "../images/main-one.png"
import MainTwo from "../images/main-two.png"
import {NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <div className="Main">
      <MainSlider />
      <div className="Main__create-block">
        <h1>Создайте свой первый проект!</h1>
      
          <div className="Main__create-block__photo">
            <div className="Main__create-block__photo-background">
              <img src={MainOne} />
            </div>

            <div className="Main__create-block__button">
            <NavLink to='/newproject'> <input type="button" value="Создать проект" /></NavLink> 
            </div>

          </div>
        </div>
      <div className="Main__join-block">
        <h1>Присоединиться к проекту</h1>
        <div className="Main__join-block__photo">
        <div className="Main__join-block__photo-background">
              <img src={MainTwo} />
            </div>
            <div className="Main__join-block__button">
            <NavLink to='/join'> <input type="button" value="Присоединиться" /></NavLink> 
            </div>
        </div>
      </div>
    </div>
  )
};

export default Main;
