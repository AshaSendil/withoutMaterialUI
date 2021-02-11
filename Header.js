import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {IoPersonCircle} from 'react-icons/io5'
import {FcGoogle} from 'react-icons/fc'

function Header() {
  return (
      <div>
    <nav style={{backgroundColor:'blue'}} className="nav">
        <div style={{textAlign:"center"}}>MYTASK</div>
      <NavLink exact activeClassName="active" to="/" >
      <AiFillHome size="24"/> Home
      </NavLink>
      <NavLink activeClassName="active" to="/users">
        <IoPersonCircle size="24"/>Users
      </NavLink>
    </nav>
    </div>
  );
}
export default Header;