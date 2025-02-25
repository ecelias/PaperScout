import '/Users/elizabethelias/Documents/GitHub/PaperScout/frontend/src/styles.css';

function Header() {
    return (
      <header className="header">
        <div className="logo">PaperScout.ai</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><button className="login">Login</button></li>
            <li><button className="signup">Sign Up</button></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;