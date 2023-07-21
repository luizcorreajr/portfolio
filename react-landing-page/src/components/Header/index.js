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
          <FaAlignJustify className="icon-menu"/>
        </div>

        <LinkHeader/>

      </header>
    </div>
  )
}

export default Header;