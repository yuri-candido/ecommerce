import './Navbar.css';
import { useState } from 'react';

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className ="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shopping</p> 
            </div>

            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Womens</Link>{menu==="womens"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"? <hr/>:<></>}</li> 
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt=""/>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar;