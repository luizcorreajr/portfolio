import './header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">I'mJr</Link>
        <div className="link-group">
          <Link to="https://github.com/lz-junior" className="link-header" target="_blank">GitHub</Link>
          <Link to="https://www.linkedin.com/in/luizcorreajr/" className="link-header" target="_blank">LinkedIn</Link>
        </div>
      </header>
    </div>
  )
}

export default Header;