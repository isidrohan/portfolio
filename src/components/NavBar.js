// import { NavLink } from "react-router-dom"
import './NavBar.css'
import  React,{useState} from 'react';
import menu from '../image/menu.png'
import cross from '../image/cross.png'

export const NavBar = () =>{
    const [openmenu, setOpenmenu] = useState(false);

    return(
        <header>
            <div className="container">
                <div className="logo">
                    {/* <NavLink to='/' className='logo-item'>WELCOME!</NavLink> */}
                    <li><a href="/" className="logo-item">WELCOME!</a></li>
                </div>
                <nav className='menu'>
                    <img className='menu-btn' src={openmenu ? cross : menu } alt="" onClick={()=>setOpenmenu(!openmenu)} />
                    <ul className={`menu-items ${openmenu ? 'menu-open' : ''}`}>
                        
                        <li><a href="/" className="list-item">HOME</a></li>
                        <li><a href="/about" className="list-item">ABOUT</a></li>
                        <li><a href="/expertise" className="list-item">EXPERTISE</a></li>
                        <li><a href="/projects" className="list-item">PROJECTS</a></li>
                        <li><a href="/contact" className="list-item">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


{/* <li> <NavLink className='list-item' to='/'>HOME</NavLink> </li>
                        <li><NavLink className='list-item' to='/about'>ABOUT</NavLink></li>
                        <li><NavLink className='list-item' to='/projects'>PROJECTS</NavLink></li>
                        <li><NavLink className='list-item' to='/contact'>CONTACT</NavLink></li> */}