import LinkHeader from '../LinkHeader';

import {Link} from 'react-router-dom';

import './header.css';
import { FaAlignJustify } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <header>

        <div className="div-header">
          <Link to="/" className="logo">I'mJr</Link>
          <button className="icon-menu"><FaAlignJustify/></button>
        </div>

        <div className="div-options">
          <LinkHeader/>
        </div>

      </header>
    </div>
  )
}

export default Header;