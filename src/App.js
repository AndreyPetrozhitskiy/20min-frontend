import React, { useState } from "react";
import AppRouter from "./AppRouter";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import ModalAuth from "./Pages/UI Component/ModalAuth";

import "./style/App.scss";
import ButtonUp from "./Pages/UI Component/ButtonUp";
import ModalPassword from "./Pages/UI Component/ModalPassword";
import EditUsersModal from "./Pages/UI Component/EditUsersModal";

function App() {
  
  const [isModalOpenAuth , setIsModalOpenAuth] = useState(false);
  const [modalTypeAuth , setModalTypeAuth] = useState("registration");

  const openModalAuth  = (type) => {
    setIsModalOpenAuth(true);
    setModalTypeAuth(type);
  };

  const closeModalAuth = () => {
    setIsModalOpenAuth(false);
  };

  const [isModalOpenPassword , setIsModalOpenPassword] = useState(false);
  
  const openModalPassword  = (type) => {
    setIsModalOpenPassword(true);

  };

  const closeModalPassword = () => {
    setIsModalOpenPassword(false);
  };


  const [isModaIOpenUsers , setisModaIOpenUsers] = useState(false);
  
  const openModalUsers  = (type) => {
    setisModaIOpenUsers(true);

  };

  const closeModalUsers = () => {
    setisModaIOpenUsers(false);
  };


  return (
    <div className="App">
      <div className="container">
        <ModalAuth isOpen={isModalOpenAuth } onClose={closeModalAuth } type={modalTypeAuth } setModalType={setModalTypeAuth} />
        <ModalPassword isOpen={isModalOpenPassword} onClose={closeModalPassword } />
        <EditUsersModal isOpen={isModaIOpenUsers } onClose={closeModalUsers} />
        <Header openModal={openModalAuth} />
        <AppRouter openModalPassword={openModalPassword}  openModalUsers={openModalUsers}/>
        <Footer />
        <ButtonUp />
      </div>
    </div>
  );
}

export default App;