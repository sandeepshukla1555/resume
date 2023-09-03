import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Home } from './Components/Home';
import Login from './Components/Login';
import SignIn from './Components/Signin';

function App() { 
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signin' element={<SignIn/>}/>
         <Route path='/create' element={<Create/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
