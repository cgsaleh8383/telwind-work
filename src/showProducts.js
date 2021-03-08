import React from 'react';
import { ShopContext } from './context/ShopContext';

class ShowProducts extends React.Component {
    static contextTypes = ShopContext;

    render(){
        console.log(this.context);
        return(
            <div>
                <h1>All Products</h1>
            </div>
        )
    }
}

export default ShowProducts;