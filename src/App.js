import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Check from './Check';
import Homepage from './Homepage';
import OneMore from './OneMore';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element ={<Homepage/>} path = "/" />
        <Route path = "/check" element ={<Check/>}></Route>
        <Route path='/onemore' element={<OneMore/>}></Route>
      </Routes>
    
    
    </BrowserRouter>

    
    </>
   
  );
}

export default App;
