import React from 'react'
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, deleteItem } from '../../redux/cart/cart.actions'
import './checkout-item.scss';
const checkoutItem = ({ cartItem, clearItem, addItem, deleteItem }) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={cartItem.imageUrl} alt="item" />
            </div>
            <span className="name"> {cartItem.name} </span>
            <span className="quantity">
                <div className="arrow" onClick={() => deleteItem(cartItem)}>&#10094;</div>
                <span className="value">{cartItem.quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">&#x20B9;{cartItem.price}</span>
            <div onClick={() => clearItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
})
export default connect(null, mapDispatchToProps)(checkoutItem)
