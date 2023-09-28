import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Home } from './Components/Home';
import Login from './Components/Login';
import Show from './Components/Show';
import SignIn from './Components/Signin';
import React,{ createContext, useState, useEffect } from 'react';
import { local } from './Local';

export const Context=createContext()

function App() {  
  
  const [status,setContextStatus]=useState(null)
  const [update, setUpdate]=useState(undefined)

  useEffect(() => {
    const locals=local.getItem('resume');
    if(locals!==null)
    {
      setContextStatus(locals)
    }
  }, [update])

  //For Logout
  function changeStatus()
  {
    local.removeItem('resume')
    setContextStatus(null)
  }
  
  return (
    <Context.Provider value={{status:status, changeStatus:changeStatus,update:update,setUpdate:setUpdate}}>
    <BrowserRouter>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signin' element={<SignIn/>}/>
         <Route path='/create' element={<Create/>}/>
         <Route path='/show' element={<Show/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
