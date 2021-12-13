import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProdCons } from '../../res/Context';
import './Product.css';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProdCons>
                        {value => {
                            return(
                                <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                 <img src={img} alt="Product" className="card-img-top" />
                                </Link>
                                <button className="cart-btn" disabled={inCart?true:false} onClick={()=> {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {inCart?(<p className="text-capitalize mb-0" disabled>{""}In cart</p>):<i className="fas fa-cart-plus" />}
                                </button>
                                </div>
                            )
                        }}
                    </ProdCons>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};
