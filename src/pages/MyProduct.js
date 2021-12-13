import React from 'react'
import NavBar from './components/NavBar';
import './MyProduct.css'

function MyProduct() {
    return (
        <div>
        <NavBar/>
        <div className="myproducts">
            <div className="pro w-100">
                <h1>My Product</h1>
            </div>
        </div>
        </div>
    )
}

export default MyProduct
