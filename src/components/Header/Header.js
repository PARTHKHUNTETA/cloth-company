import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/lion.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import './Header.scss'

const Header = ({ currentuser }) => {

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
        </div>
    </div >)
}

const mapStateToProps = (state) => ({
    currentuser: state.user.currentuser
})

export default connect(mapStateToProps)(Header);