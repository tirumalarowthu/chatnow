import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Check from './Check';
import Homepage from './Homepage';
import OneMore from './OneMore';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    const response = axios.get("https://jsonplaceholder.typicode.com/users").
    then(res => {
      setData(res.data)

    }).catch(err => console.log(err))

  })
  return (
    <div>
      <h2>Hello world </h2>
      <h4>How are you ? </h4>
      {
        data && data.length>0 && data.map(item =>{
          return <div>{item.name} 
          <h3>{item.username}</h3>
          <h3>{item.email}</h3>
          </div>
        })
      }
      <form onSubmit={()=>alert("form sumbitted .")}>
        <div> 
          <input name="veera" type='email'/>
        </div>
        <div>
          <button>Submit </button>
        </div>
      </form>
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

