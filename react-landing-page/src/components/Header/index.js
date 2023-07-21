import LinkHeader from '../LinkHeader';

import {Link} from 'react-router-dom';

import './header.css';
import { FaAlignJustify } from 'react-icons/fa';

function Header() {

  function btnMenu() {
    let divOptions = document.getElementById("div-options");
    divOptions.style.display = 'block';
  }

  return (
    <div>
      <header>

        <div className="div-header">
          <Link to="/" className="logo">I'mJr</Link>
          <button onClick={()=> btnMenu()} className="icon-menu"><FaAlignJustify/></button>
        </div>


        <div id="div-options" className="div-options">
          <LinkHeader/>
        </div>
      </header>
    </div>
  )
}

export default Header;