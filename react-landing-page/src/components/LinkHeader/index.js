import {Link} from 'react-router-dom';
import './linkHeader.css';


function LinkHeader() {
  return (
    <div className="div-container">
      <nav className="container">
        <ul className="link-group">
            
          <li className="li-link-header"><Link to="/" className="link-header">Home</Link></li>
          <li className="li-link-header"><Link to="https://github.com/lz-junior" className="link-header" target="_blank">GitHub</Link></li>
          <li className="li-link-header"><Link to="https://www.linkedin.com/in/luizcorreajr/" className="link-header" target="_blank">LinkedIn</Link></li>
          <li className="li-link-header dropdown">

            <Link to="/projects" className="link-header">Projects</Link>
            
            <ul className="dropdown-menu">
              <li href="https://class-react-ljr.netlify.app" className="link-header" target="_blank" rel="noopener noreferrer">Prime Flix</li>
              <li href="/" className="link-header">teste 002</li>
              <li href="/" className="link-header">teste 003</li>
            </ul>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default LinkHeader;