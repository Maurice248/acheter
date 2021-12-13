import React, { Component } from 'react'
import NavBar from '../NavBar';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProdCons } from '../../../res/Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <section>
                    <ProdCons>
                        {(value) => {
                            const {cart} = value;
                            if(cart.length >0){
                                return (
                                    <React.Fragment>
                                    <div className="col-10 mx-auto my-2 text-center text-title">
                                        <h1 className="text-capitalize font-weight-bold">
                                             Your Cart
                                        </h1>
                                    </div>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                    </React.Fragment>
                                );
                            }else {
                                return <EmptyCart />
                            }
                        }}
                    </ProdCons>
                </section>
            </div>
        )
    }
}
