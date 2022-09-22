import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import {useState} from 'react';
import News from './Types/News';
function App() {
  const[newsGlobal,setNewsGlobal] = useState<News[]>([]);


  return (
    <BrowserRouter>
      <Route path="/" element={<Home setNewsGlobal={setNewsGlobal}/> }   
      <Route path="/:details" element={<Details articleData={newsGlobal}/>}/>    
    </BrowserRouter>
  );
}

export default App;
