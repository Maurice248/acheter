import React from 'react'
import './MyProduct.css'
import MyVerticallyCenteredModal from './components/ModalAdd';
import {Link} from 'react-router-dom';
import { Data } from './components/Data';
import {IconContext} from 'react-icons';
import {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './components/NavBar.css';

function MyProduct() {
    const [modalShow, setModalShow] = React.useState(false);

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
        <React.Fragment>
        <IconContext.Provider value ={{color: '#ffffff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars color='white' onClick={showSidebar} />
                </Link>
                <Link to="/home" className="hea">
                    <h1>Acheter et Vendre</h1>
                </Link>
            </div>
        <div className="myproducts">
            <div className="pro w-100 ">
                <h1>My Product</h1>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4 className='text-title'>
                                    Product
                                    <button className='btn btn-primary btn-sm float-end' onClick={() => setModalShow(true)}>
                                        Add Product
                                    </button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </h4>
                            </div>
                            <div className='card-body'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </React.Fragment>
        </div>
    )
}

export default MyProduct
