import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/crown.svg'; //importing the svg logo
import '../assets/styles/navigation.styles.scss';

const Nav = () => {
    return (
        <Fragment>
            <div className='navbar'>

                <NavLink to={'/'} className="logo-link">
                    <Logo className="logo" /> 
                </NavLink>
                
                <div className='pagetitle'>
                    <h1>AIDOO ONLINE STORE</h1>
                </div>

                <div className='links'>
                    <NavLink to={'/'} className="nav-link" >Home</NavLink>
                    <NavLink to={'/shop'} className="nav-link" >Shop</NavLink>
                    <NavLink to={'/contact'} className="nav-link" >Contact</NavLink>
                    <NavLink to={'/login'} className="nav-link" >Sign in</NavLink>
                    <NavLink to={'/cart'} className="nav-link" >XX</NavLink>
                </div>
            </div>

            <Outlet />
        </Fragment>

    );
}

export default Nav;