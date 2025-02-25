import '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/styles.css';
import strategyImage from '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/strategy.png';

function SearchStrategy() {
  return (
    <section className="search-strategy">
      <h2>Develop your search strategy</h2>
      <div className="strategy-content">
        <div className="stragety-text">
          <h3>Select your keywords</h3>
          <p>Choose which keywords PaperScout should include in our search and any that we should avoid.</p>
          <h3>Input the entire search strategy</h3>
          <p>Know exactly what you are looking for? PaperScout will use that for our search.</p>
          <h3>Not sure what to look for?</h3>
          <p>No worries. Give PaperScout a summary of your research work and we will create a search for you.</p>
          <button className="strategy-button">Get Started</button>
        </div>
        <div className="image-content">
          <img src={strategyImage} alt="Underwater Exploration Illustration" />
        </div>
      </div>
    </section>
  );
}

export default SearchStrategy;