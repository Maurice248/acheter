import React from 'react'
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton'

export default function CartTotals({value, history}) {
    const {cartTotal,delivery,cartSubtotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 mb-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize hto'>
                        <Link to="/home">
                            <button className='btn btn-outline-danger mb-3 px-5' type='button' onClick={()=> clearCart()}>clear Cart</button>
                        </Link>
                        <h5>
                            <span className='text-title'>
                                subtotal :
                            </span>
                            <strong>$ {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>
                                delivery : 
                            </span>
                            <strong>$ {delivery}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>
                                Total : 
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
