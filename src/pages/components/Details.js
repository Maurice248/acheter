import React, { Component } from 'react'
import NavBar from './NavBar';
import './Details.css'
import { ProdCons } from '../../res/Context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='deta'>
                    <div className='det'>
                        <h1>Details</h1>
                    </div>
                    <ProdCons>
                        {(value) => {
                            const {id,company,img,info,price,title,inCart} = value.detailProduct;
                            return (
                                <div className="container py-5">
                                    <div className="row">
                                        <div className="col-10 mx-auto text-center text-slanted my-4">
                                            <h1>{title}</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3">
                                            <img src={img} className="img-fluid" alt="Product" ></img>
                                        </div>
                                        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                            <h2>Model : {title}</h2>
                                            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                                made by : <span className='text-uppercase '>{company}</span>
                                            </h4>
                                            <h4>
                                                <strong>
                                                    price : <span>$</span> {price}
                                                </strong>
                                            </h4>
                                            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                                Info about the product:
                                            </p>
                                            <p className='text-muted lead'>{info}</p>
                                            <div>
                                                <Link to="/home">
                                                    <button className='BTH mx-1'>Back to Home</button>
                                                </Link>
                                                <button className='BTH mx-1' disabled={inCart?true:false} onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                    {inCart?"InCart":"add to cart"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }}
                    </ProdCons>
                </div>
            </div>
        )
    }
}
