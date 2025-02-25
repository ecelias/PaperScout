import '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/styles.css';
import heroImage from '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/hero.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to PaperScout</h1>
        <h3>Stay informed effortlessly</h3>
        <p>Made by scientists, for scientists</p>
        <button className="cta">Click Here to Begin</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Lighthouse Illustration" />
      </div>
    </section>
  );
}

export default Hero;