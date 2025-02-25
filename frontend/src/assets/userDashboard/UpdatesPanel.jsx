import PropTypes from 'prop-types';

function UpdatesPanel({ updates }) {
  return (
    <div className="updates-panel">
      <h3>Updates</h3>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>{`${update.searchName} - ${update.type} - ${update.time}`}</li>
        ))}
      </ul>
    </div>
  );
}

UpdatesPanel.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      searchName: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UpdatesPanel;
