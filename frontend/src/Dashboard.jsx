import { useState, useEffect } from 'react';
import Sidebar from './assets/userDashboard/Sidebar.jsx';
import DashboardHeader from './assets/userDashboard/DashboardHeader';
import AboutShortcut from './assets/userDashboard/AboutShortcut';
import ActiveSearches from './assets/userDashboard/ActiveSearches';
import PastSearches from './assets/userDashboard/PastSearches';
import UpdatesPanel from './assets/userDashboard/UpdatesPanel';
import './dashboard.css';


function Dashboard() {
  const [userData, setUserData] = useState({
    activeSearches: [],
    pastSearches: [],
    updates: []
  });

  useEffect(() => {
    // Fetch user data from an API or context
    fetch('/api/user/dashboard')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <DashboardHeader activeSearches={userData.activeSearches.length} />
        <div className="stats-section">
          <AboutShortcut />
          <ActiveSearches searches={userData.activeSearches} />
        </div>
        <div className="stats-section"><PastSearches searches={userData.pastSearches} />
        <UpdatesPanel updates={userData.updates} />
        </div>

        {/* Footer text aligned at the bottom of the main content */}
        <div className="dash-footer">
          @ 2025, Made with <span className="heart">❤️</span> by{" "}
          <span className="author-name">Elizabeth Elias</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;