import React from "react"
import "../style/EditProjectCreator.scss"
import Pencil from "../images/pencil.png"
import cross from "../images/cross.svg"
const data = [
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
  ]
const EditProjectCreator = ({openModalUsers}) => {
  return (
    <div className="EditProjectCreator">
        <h1>Название проекта</h1>
        <div className="EditProjectCreator__Content">
            <div className="EditProjectCreator__Content__description" >
                <input type="text"  placeholder={"Изначальное имя проекта"}/>
                <input type="text"  placeholder={"Изначальный статус проекта"}/>
                <textarea  placeholder={"Изначальное описание проекта"} ></textarea>
                <input type="text"  placeholder={"Изначальная ссылка на фигму  проекта"}/>
                <input type="text"  placeholder={"Изначальная ссылка на гит  проекта"}/>
                <input type="button" value="Изменить" />
                <input type="button" value="Опубликовать" />
            </div>

            <div className="EditProjectCreator__Content__users">
                <div className="EditProjectCreator__Content__users__image">
                    {/* 1 фото это фото проекта,2 фото это карандаш с макета */}
                    <img src="" />
                    <img src={Pencil} />
                </div>
                <div className="EditProjectCreator__Content__users__participants">
                    <h1>Участники</h1>
                    {data.map((item,index)=>(
                    <div key={index} className="EditProjectCreator__Content__users__participants__item">
                        <p>{`${index+1}.`}</p>
                        <p>{item.name}</p>
                        <input type="text" placeholder={item.role} />
                        <img src={cross} />
                    </div>
                    ))}

                    <div className="EditProjectCreator__Content__users__participants__button">
                        <input onClick={() => openModalUsers()} type="button" value={"Добавить"} />
                    </div>
           
                </div>
                <input type="button" value={"Удалить проект"} />
            </div>
        </div>
    </div>
  )
};

export default EditProjectCreator;
