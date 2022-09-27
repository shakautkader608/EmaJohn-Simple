import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart'
import './Shops.css'

const Shops = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=><Products product={product} key={product.id} handleAddToCart={handleAddToCart}></Products>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;