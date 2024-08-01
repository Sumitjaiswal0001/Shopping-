import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../Assets/logo1.jpg';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar flex justify-around'>
      <div className='nav-logo flex items-center gap-10'>
        <img src={logo1} alt="Shopper Logo" />
        <p className='text-black'></p>
      </div>
      <ul className='nav-menu flex items-center list-none gap-12'>
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className='nav-log-cart flex items-center gap-11'>
        <Link to='/login'>
          <button className='outline-none'>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count flex justify-center items-center">0</div>
      </div>
    </div>
  );
};

export default Navbar;
