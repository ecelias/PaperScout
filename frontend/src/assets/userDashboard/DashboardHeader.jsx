import PropTypes from 'prop-types';

function DashboardHeader({ activeSearchCount }) {
  return (
    <div className="dashboard-header">
      <div className="header-item">Active Searches: {activeSearchCount}</div>
      <div className="header-item">Next Update: December 22</div>
      <div className="header-item">Articles Sent: {activeSearchCount * 5}</div>
      <button className="new-search-btn">Start a new search</button>
    </div>
  );
}

DashboardHeader.propTypes = {
  activeSearchCount: PropTypes.number.isRequired,
};
  
export default DashboardHeader;
  