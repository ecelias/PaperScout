import '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/styles.css';
import emailupdatesimg from '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/email.jpg';
import txtupdatesimg from '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/assets/landingPage/images/text.png';

function Updates() {
  return (
    <section className="updates">
      <h2>Daily, weekly, or monthly updates - wherever you are</h2>
      <div className="update-options">
        <div className="option">
          <img src={emailupdatesimg} alt="Email Updates Illustration" />
          <h3>Sent to your email</h3>
          <p>Paperscout will create a summary of the most relevant publications, sent right to your inbox.</p>
        </div>
        <div className="option">
          <img src={txtupdatesimg} alt="Text Updates Illustration" />
          <h3>Sent directly to your phone</h3>
          <p>Choose to receive updates right on your phone and get a text with new publications.</p>
        </div>
      </div>
    </section>
  );
}

export default Updates;