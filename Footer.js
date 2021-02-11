import React from "react";
import {AiTwotoneFileAdd} from 'react-icons/ai'
import {RiPhoneFill} from 'react-icons/ri'
import {FaGooglePlusG} from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
      <div><AiTwotoneFileAdd size="24"/>terms&conditions<RiPhoneFill size="24"/>Contactus <FaGooglePlusG size="24"/>Signin </div>
    </div>
  );
}

export default Footer;