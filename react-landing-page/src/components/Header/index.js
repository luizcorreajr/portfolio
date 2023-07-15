import './header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">I'mJr</Link>

        <nav>
          <ul className="link-group">
            
            <li><Link to="/" className="link-header">Home</Link></li>
            <li><Link to="https://github.com/lz-junior" className="link-header" target="_blank">GitHub</Link></li>
            <li><Link to="https://www.linkedin.com/in/luizcorreajr/" className="link-header" target="_blank">LinkedIn</Link></li>
            <li className="dropdown">
              <Link to="/projects" className="link-header">Projects</Link>
              <div className="dropdown-menu">
                <a href="/">teste 1</a>
                <a href="/">teste 2</a>
                <a href="/">teste 3</a>
              </div>
            </li>
            
          </ul>
        </nav>

      </header>
    </div>
  )
}

export default Header;