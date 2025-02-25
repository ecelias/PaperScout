import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaUser, FaSignInAlt, FaRocket } from 'react-icons/fa';
import { BiBarChartAlt2 } from 'react-icons/bi';
import logo from '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/logo.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="PaperScout Logo" className="logo" />
        <h2>PaperScout Dashboard</h2>
      </div>
      <ul className="nav-section">
        <li>
          <FaHome className="icon" />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <FaSearch className="icon" />
          <Link to="/search">New Search</Link>
        </li>
        <li>
          <BiBarChartAlt2 className="icon" />
          <Link to="/history">Search History</Link>
        </li>
      </ul>
      <h4 className="account-title">Account Pages</h4>
      <ul className="nav-section">
        <li>
          <FaUser className="icon" />
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <FaSignInAlt className="icon" />
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <FaRocket className="icon" />
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
