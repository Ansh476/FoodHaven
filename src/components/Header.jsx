import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import appstore from '../utils/appstore';


const Header = () => {

  const onlineStatus = useOnlineStatus();
  const [btnname,setbtnname]= useState("Login");

  const {loggedinusername} = useContext(UserContext);

  const cartitems = useSelector((store)=> store.cart.items);
  return (
    <div className='header'>
      <div>
        <img src={LOGO_URL} alt="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status:{onlineStatus ? "✅":"🔴"}</li>
          <li>
           <Link to="/"> Home</Link>
          </li>
          <li>
           <Link to="/about"> About Us</Link>
          </li>
          <li>
           <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
           <Link to="/grocery"> Grocery</Link>
          </li>
          <li>
           <Link to="/cart"> Cart -{cartitems.length} items </Link>
          </li>
          <button onClick={()=>{
            btnname=="Login"? setbtnname("Logout"): setbtnname("Login");
          }}>{btnname}
          </button>
          <li>{loggedinusername}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header