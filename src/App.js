// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Projects} from './pages/Projects'
import {Contact} from './pages/Contact'
import { Expertise } from './pages/Expertise';

function App() {
  return (
    <>
    {/* <BrowserRouter> */}
    <div className="main-box">
    <NavBar/>
      {/* <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/projects' element={<Projects/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>

      </Routes> */}
    {/* </BrowserRouter> */}
    
      <Home/>
      <About/>
      <Expertise/>
      <Projects/>
      <Contact/>
    </div>

    </>
     
  );
}

export default App;
