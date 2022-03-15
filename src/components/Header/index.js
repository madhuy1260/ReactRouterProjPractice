// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="Container">
    <div className="logoContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logoName">Wave</h1>
    </div>
    <ul className="ulContainer nav-menu">
      <li className="listItem">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="listItem">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="listItem">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
