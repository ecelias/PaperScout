import { useState, useEffect } from 'react';
import Sidebar from './assets/userDashboard/Sidebar.jsx';
import DashboardHeader from './assets/userDashboard/DashboardHeader';
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
          <ActiveSearches searches={userData.activeSearches} />
          <UpdatesPanel updates={userData.updates} />
        </div>
        <PastSearches searches={userData.pastSearches} />
      </div>
    </div>
  );
}

export default Dashboard;