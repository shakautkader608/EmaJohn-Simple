import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const {name,img,seller,ratings,price}=props.product;
    const{handleAddToCart}=props
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}$</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings}star</small></p>
            </div>
            
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                <p className='cart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};
  
export default Products;