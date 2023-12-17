import React, { useEffect } from "react";
import "../../style/modal.scss";
import Cross from "../../images/cross.svg";

const ModalAuth = ({ isOpen, onClose, type, setModalType }) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (isOpen && !event.target.closest(".Modal")) {
            onClose();
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, [isOpen, onClose]);
    
      useEffect(() => {
        const disableScroll = () => {
          document.body.classList.add("modal-open");
        };
    
        const enableScroll = () => {
          document.body.classList.remove("modal-open");
        };
    
        if (isOpen) {
          disableScroll();
        } else {
          enableScroll();
        }
    
        return () => {
          enableScroll();
        };
      }, [isOpen]);
    
      const handleSwitchModal = (newType) => {
        setModalType(newType);
      };
    
      const handleCrossClick = () => {
        onClose();
      };
    
      return (
        <>
          {isOpen && (
            <div className="Container__modal" >
              <div className="Modal">
                {type === "login" ? (
                  <>
                    <h1>Авторизация</h1>
                    <input type="text" placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>  
                    <input type="button" value="Авторизоваться" />
                    <p onClick={() => handleSwitchModal("registration")}>Нет аккаунта?</p>
                  </>
                ) : (
                  <>
                    <h1>Регистрация</h1>
                    <input type="text" placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>  
                    <input type="button" value="Зарегистрироваться" />
                    <p onClick={() => handleSwitchModal("login")}>Уже есть аккаунт?</p>
                  </>
                )}
                <img className="modal_cross" src={Cross} onClick={handleCrossClick} />
              </div>
            </div>
          )}
        </>
      );
    };

export default ModalAuth;


