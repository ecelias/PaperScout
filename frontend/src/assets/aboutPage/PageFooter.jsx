import '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <h2>Why PaperScout?</h2>
      <div className="footer-buttons">
        <button className="cta">About the app</button>
        <button className="cta">About the developer</button>
      </div>
      <div className="footer-links">
        <div>
          <h4>Get Started</h4>
          <ul>
            <li><a href="#dashboard">User Dashboard</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#signup">Sign Up</a></li>
          </ul>
        </div>
        <div>
          <h4>About</h4>
          <ul>
            <li><a href="#about">About PaperScout</a></li>
          </ul>
        </div>
        <div>
          <h4>More Info</h4>
          <ul>
            <li><a href="#github">GitHub Repo</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;