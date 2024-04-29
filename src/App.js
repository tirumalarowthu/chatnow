import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Check from './Check';
import Homepage from './Homepage';
import OneMore from './OneMore';

function App() {
  return (
    <div>
      <h2>Hello world </h2>
      <h4>How are you ? </h4>
    </div>

    
   
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Check from './Check';
// import Homepage from './Homepage';
// import OneMore from './OneMore';

// function App() {
//   return (
//     <BrowserRouter basename='/'>
//       <Routes>
//         <Route element ={<Homepage/>} path = "/" />
//         <Route path = "/check" element ={<Check/>}></Route>
//         <Route path='/onemore' element={<OneMore/>}></Route>
//       </Routes>
//     </BrowserRouter>

    
   
//   );
// }

// export default App;

