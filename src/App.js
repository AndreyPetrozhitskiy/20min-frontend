import React, { useState } from "react";
import AppRouter from "./AppRouter";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import ModalAuth from "./Pages/UI Component/ModalAuth";

import "./style/App.scss";
import ButtonUp from "./Pages/UI Component/ButtonUp";

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("registration");

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="container">
        <ModalAuth isOpen={isModalOpen} onClose={closeModal} type={modalType} setModalType={setModalType} />
        <Header openModal={openModal} />
        <AppRouter />
        <Footer />
        <ButtonUp />
      </div>
    </div>
  );
}

export default App;