import { Link } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="sidebar">
        <h2>PaperScout Dashboard</h2>
        <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/history">Search History</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;