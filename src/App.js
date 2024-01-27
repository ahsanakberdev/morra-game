import './App.css';
import React from "react";
import {Routes,Route} from 'react-router-dom'
import Index from "./Pages/Index";
import { BrowserRouter } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
