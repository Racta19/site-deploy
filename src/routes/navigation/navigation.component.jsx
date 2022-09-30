//jshint esversion: 6

import { Fragment, useContext } from 'react';
import {Outlet,Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import Footer from '../../components/footer/footer.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import'./navigation.styles.scss';

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
    return (
        <Fragment>
            <div className='header'>
                <div className='color-bar container-fluid'>
                    <nav className='navbar navbar-expand-lg navbar-light '>
                        <div className='container-fluid'>
                            <Link className='navbar-brand' to="/"><img src="headerImages/headerImage_1(Logo).jpeg" alt="Akhtar Stationers" /></Link>
                            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto ">
                                    <li className='nav-item'>
                                        <Link className="nav-link" to="shop">Shop</Link>
                                    </li>
                                    <li className='nav-item'>
                                    {
                                        currentUser ? (
                                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>)
                                            : (<Link className="nav-link" aria-current="page" to="/auth">Sign In</Link>
                                        )
                                    }
                                    </li>
                                    <li className='nav-item'>
                                        <CartIcon />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>        
                </div>
                {isCartOpen && <CartDropdown/>}           
            </div>
            <Outlet />
            <Footer/>
        </Fragment>  
    );
}

export default Navigation;