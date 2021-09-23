import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/lion.svg'
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import {selectCurrentUser } from '../../redux/user/user.selectors'
import { connect } from 'react-redux';
import './Header.scss'

const Header = ({ currentuser, hidden }) => {

    return (<div className="Header">
        <Link className="logo-container" to="/" >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >
                SHOP
            </Link>
            <Link className="option" to="/shop" >
                CONTACT
            </Link>
            {
                currentuser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin" >
                        SIGN IN
                    </Link>}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div >)
}

const mapStateToProps = (state) => createStructuredSelector({
    currentuser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);