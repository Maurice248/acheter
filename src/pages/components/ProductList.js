import React, { Component } from 'react';
import Product from './Product';
import { ProdCons } from '../../res/Context';


export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto my-2 text-center text-title">
                                <h1 className="text-capitalize font-weight-bold">
                                    Products
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <ProdCons>
                                {(value) => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProdCons>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
        )
    }
}
