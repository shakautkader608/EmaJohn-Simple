import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <p>Products Summary</p>
                <p>Selected Item:{props.cart.length}</p>
        </div>
    );
};

export default Cart;