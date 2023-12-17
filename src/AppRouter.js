import React from "react"
import {Routes, Route} from 'react-router-dom'
import Main from "./Pages/Main";
import Aboutme from "./Pages/AboutMe";
import NewProject from "./Pages/NewProject";
import NotFaundPage from "./NotFaundPage";
import JoinProject from "./Pages/JoinProject";
const AppRouter = () => {
  return (
    <Routes >
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<Aboutme />}/>
        <Route path='/newproject' element={<NewProject />}/>
        <Route path='/join' element={<JoinProject />}/>
        <Route path='/profile' element={<NotFaundPage />}/>
        <Route path='/faq' element={<NotFaundPage />}/>
        <Route path='*' element={<NotFaundPage />}/>
      </Routes>
  )
};

export default AppRouter;
