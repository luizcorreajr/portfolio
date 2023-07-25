import {Link} from 'react-router-dom';
import '../Header/style.css'
// import './linkHeader.css';


function LinkHeader() {
  return (
    <div className="container">
      <nav className="content">
        <ul className="link-group">
            
          <li><Link to="/">Home</Link></li>
          <li><Link to="https://github.com/lz-junior" target="_blank">GitHub</Link></li>
          <li><Link to="https://www.linkedin.com/in/luizcorreajr/" target="_blank">LinkedIn</Link></li>
          <li><Link to="/projects">Projects</Link>
            
            <ul>
              <li><Link to="https://class-react-ljr.netlify.app" target="_blank">Prime Flix</Link></li>
              <li><Link to="/">ToDo List</Link></li>
              <li><Link to="/">My Services</Link></li>
            </ul>
            
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default LinkHeader;