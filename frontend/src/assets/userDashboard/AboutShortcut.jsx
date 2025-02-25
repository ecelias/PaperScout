import { Link } from 'react-router-dom';

function AboutShortcut() {
    return (
      <div className="about-shortcut">
        <p>Built by scientists</p>
        <h3>PaperScout.ai</h3>
        <p>Helping researchers stay informed. </p>
        <Link to="/about" className="about-button">
            Read More →
        </Link>
      </div>
    );
  }
  
  export default AboutShortcut;