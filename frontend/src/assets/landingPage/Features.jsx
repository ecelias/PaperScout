import '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/styles.css';
import featureimg1 from "/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/features1.png";
import featureimg2 from "/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/features2.png";
import featureimg3 from "/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/features3.png";

function Features() {
  return (
    <section className="features">
      <h2>Keep up with new publications in your field</h2>
      <div className="feature-cards">
        <div className="card">
          <img src={featureimg1} alt="Queries Illustration" />
          <h3>Queries PubMed and arXIV</h3>
          <p>Optimized for biomedical, computer science, mathematics, and physics.</p>
        </div>
        <div className="card">
          <img src={featureimg2} alt="Reading Illustration" />
          <h3>Read what matters</h3>
          <p>PaperScout only sends relevant publications so you can focus on research.</p>
        </div>
        <div className="card">
          <img src={featureimg3} alt="On the go Illustration" />
          <h3>On the go?</h3>
          <p>PaperScout will keep you informed no matter where you are.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;