import PropTypes from 'prop-types';

function ActiveSearches({ searches }) {
  return (
    <div className="active-searches">
      <h3>Active Searches</h3>
      {searches.length > 0 ? (
        searches.map((search, index) => (
          <p key={index}>{search.name} - {search.status}</p>
        ))
      ) : (
        <p>No active searches</p>
      )}
    </div>
  );
}

ActiveSearches.propTypes = {
  searches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
  
export default ActiveSearches;

