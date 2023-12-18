import React from "react"
import {Routes, Route} from 'react-router-dom'
import Main from "./Pages/Main";
import Aboutme from "./Pages/AboutMe";
import NewProject from "./Pages/NewProject";
import NotFaundPage from "./NotFaundPage";
import JoinProject from "./Pages/JoinProject";
import Profile from "./Pages/Profile";
import FAQ from "./Pages/FAQ";
import ProjectItem from "./Pages/ProjectItem";
import EditProjectCreator from "./Pages/EditProjectCreator";
import EditProjectParticipant from "./Pages/EditProjectParticipant";
const AppRouter = ({ openModalPassword,openModalUsers }) => {
  return (
    <Routes >
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<Aboutme />}/>
        <Route path='/newproject' element={<NewProject />}/>
        <Route path='/join' element={<JoinProject />}/>
        <Route path='/profile' element={<Profile openModalPassword={openModalPassword} />}/>
        <Route path='/faq' element={<FAQ />}/>
        {/* Конкретный проект */}
        {/* http://localhost:3000/project/1 */}
        <Route path='/project/1' element={<ProjectItem />}/>
        {/* Редактированеи проекта создателем */}
        {/* http://localhost:3000/edit-project-creator */}
        <Route path='/edit-project-creator' element={<EditProjectCreator openModalUsers={openModalUsers} />}/>
        {/* Редактирование проекта участником */}
          {/* http://localhost:3000/edit-project-participant */}
        <Route path='/edit-project-participant' element={<EditProjectParticipant />}/>
        <Route path='*' element={<NotFaundPage />}/>
      </Routes>
  )
};

export default AppRouter;
