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
        <IconContext.Provider value ={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars color='black' onClick={showSidebar} />
                </Link>
                <h1>Acheter et Vendre</h1>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose className="ali" size={20} />
                        </Link>
                    </li>
                    <li>
                        
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
