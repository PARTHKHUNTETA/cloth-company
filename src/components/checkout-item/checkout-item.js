import React from 'react'
import './checkout-item.scss';
const checkoutItem=({cartItem})=> {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">{cartItem.quantity}</span>
            <span className="price">&#x20B9;{cartItem.price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default checkoutItem
