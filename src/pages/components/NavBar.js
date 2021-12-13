import React, {useState} from 'react';
import './NavBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { Data } from './Data';
import {IconContext} from 'react-icons';

function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
        <IconContext.Provider value ={{color: '#ffffff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars color='white' onClick={showSidebar} />
                </Link>
                <Link to="/home" className="hea">
                    <h1>Acheter et Vendre</h1>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose className="ali" size={20} />
                        </Link>
                    </li>
                    <li>
                        <img className="fic" src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="Profile" width="175" height="175"></img>
                    </li>
                    <li>
                        <h3 className="information">Maurice Lance Tezon</h3>
                        <h5 className="information">nozetecnal@gmail.com</h5>
                        <div className="space"></div>
                    </li>
                    {Data.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <button className="pinoy">Logout</button>
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    )
}

export default NavBar
