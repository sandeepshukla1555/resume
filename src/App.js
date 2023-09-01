import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Home } from './Components/Home';

function App() { 
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
