import PropTypes from 'prop-types';

function PastSearches({ searches }) {
  return (
    <div className="past-searches">
      <h3>Past Searches</h3>
      <table>
        <thead>
          <tr>
            <th>Search Name</th>
            <th>Search Terms</th>
            <th>Database</th>
            <th>Search Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searches.map((search, index) => (
            <tr key={index}>
              <td>{search.name}</td>
              <td>{search.terms}</td>
              <td>{search.database}</td>
              <td>{search.date}</td>
              <td>{search.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

PastSearches.propTypes = {
  searches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      terms: PropTypes.string.isRequired,
      database: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PastSearches;