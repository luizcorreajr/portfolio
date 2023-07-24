import { useState } from 'react';
import { Link } from 'react-router-dom';

import LinkHeader from '../LinkHeader';

import { FaAlignJustify } from 'react-icons/fa';
import './header.css';



function Header() {
  const [status, setStatus] = useState(false);



  function btnMenu() {
    setStatus(!status);

    let divOptions = document.getElementById("div-options");
    
    status === true
    ? divOptions.style.display = 'block' 
    : divOptions.style.display = 'none'
  }


  
  return (
    <div>
      <header>

        <div className="div-header">
          <Link to="/" className="logo">I'mJr</Link>
          <button onClick={btnMenu} className="icon-menu"><FaAlignJustify/></button>
        </div>

        <div id="div-options" className="div-options">
          <LinkHeader/>
        </div>

      </header>
    </div>
  )
}

export default Header;