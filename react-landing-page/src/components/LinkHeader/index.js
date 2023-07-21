import {Link} from 'react-router-dom';
import './linkHeader.css';

function LinkHeader() {
  return (
    <div className="div-container">
      <nav className="container">
        <ul className="link-group">
            
          <li><Link to="/" className="link-header">Home</Link></li>
          <li><Link to="https://github.com/lz-junior" className="link-header" target="_blank">GitHub</Link></li>
          <li><Link to="https://www.linkedin.com/in/luizcorreajr/" className="link-header" target="_blank">LinkedIn</Link></li>
          <li className="dropdown">
            
            <Link to="/projects" className="link-header">Projects</Link>
            
            <div className="dropdown-menu">
              <a href="https://class-react-ljr.netlify.app" className="link-header" target="_blank" rel="noopener noreferrer">Prime Flix</a>
              <a href="/" className="link-header">teste 002</a>
              <a href="/" className="link-header">teste 003</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LinkHeader;