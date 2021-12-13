import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as FaIcons from 'react-icons/fa';
import ProductList from './components/ProductList';
import {Link} from 'react-router-dom';
import { Data } from './components/Data';
import {IconContext} from 'react-icons';
import {useState} from 'react';
import * as AiIcons from 'react-icons/ai';
import './components/NavBar.css';

function Home() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
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
        <div className='home'> 
            <div className="search w-100">
                    <div className="category">
                        <Form.Select aria-label="Default select example" className="drop">
                            <option>Category</option>
                            <option value="gadgets">Gadgets</option>
                            <option value="clothes">Clothes</option>
                            <option value="HomeAcc">Home Accessories</option>
                        </Form.Select>
                    </div>
                    <div className="ser w-25">
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" size="sm" className="me-1 w-100" aria-label="Search" />
                            <Button variant="secondary">Search</Button>
                        </Form>
                    </div>
                    <div className="cart">
                        <Link to="/cart">
                            <Button variant="secondary">
                                <FaIcons.FaShoppingCart className="ila" size={20} />
                                <span className="ms-2">My Cart</span>
                            </Button>
                        </Link>
                    </div>
            </div>
            <ProductList />
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
    )
}

export default Home
