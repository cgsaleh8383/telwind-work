import React, { createContext } from 'react';

export const ShopContext = createContext();
class ShopContextProvider extends React.Component {
   state = {
       products: [
        {id: 1, name: 'Laptop', price: 100},
        {id: 2, name: 'Mobile', price: 300},
        {id: 3, name: 'Hp Laptop', price: 400},
        {id: 4, name: 'Pc', price: 500},
       ]
   }
    render() {
        return (
            <ShopContext.Provider value={{...this.state}}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
};

export default ShopContextProvider;