// import { NavLink } from "react-router-dom"
import './NavBar.css'
import  React,{useState} from 'react';
import menu from '../image/menu.png'
import cross from '../image/cross.png'
import { useRef } from 'react';
import {Home} from '../pages/Home'
import {About} from '../pages/About'
import {Projects} from '../pages/Projects'
import {Contact} from '../pages/Contact'
import { Expertise } from '../pages/Expertise';
import { Footer } from '../pages/Footer';

export const NavBar = (props) =>{
    const [openmenu, setOpenmenu] = useState(false);
    const home = useRef();
    const about = useRef();
    const expertise = useRef();
    const project = useRef();
    const contact = useRef();

    const scrollHandler = (eleRef) => {
        console.log(eleRef);
        window.scrollTo({top: eleRef.current.offsetTop, behavior: "smooth"});
    }

    return(
        <>
        
        <header>
            <div className="container">
                <div className="logo">
                    {/* <NavLink to='/' className='logo-item'>WELCOME!</NavLink> */}
                    <li> <a className="logo-item" >WELCOME!</a></li>
                </div>
                <nav className='menu'>
                    <img className='menu-btn' src={openmenu ? cross : menu } alt="" onClick={()=>setOpenmenu(!openmenu)} />
                    <ul className={`menu-items ${openmenu ? 'menu-open' : ''}`}>
                        
                        <li><a className="list-item" onClick={()=>{scrollHandler(home)}}>HOME</a></li>
                        <li><a className="list-item" onClick={()=>{scrollHandler(about)}}>ABOUT</a></li>
                        <li><a className="list-item" onClick={()=>{scrollHandler(expertise)}}>EXPERTISE</a></li>
                        <li><a className="list-item" onClick={()=>{scrollHandler(project)}}>PROJECTS</a></li>
                        <li><a className="list-item" onClick={()=>{scrollHandler(contact)}}>CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
        <Home nameforRef={home}/>
        <About nameforRef={about}/>
        <Expertise nameforRef={expertise} />
        <Projects nameforRef={project}/>
        <Contact nameforRef={contact}/>
        <Footer/>
    
      </>
    )
}

