

export default function App() {
  return (
  <div className="bg-gray-100 min-h-screen">
    {/* Navigation Bar */}
    <nav>
      <div className="logo">PaperScout.ai</div>
      <div className="nav-links">
        <button>Home</button>
        <button>About</button>
        <button className="bordered">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>

      {/* Header Section */}
      <header className="flex bg-gray-900 text-white p-12">
        <div className="w-1/2">
          <div className="header">
            <h1>Welcome to PaperScout</h1>
            <h3>Stay informed effortlessly</h3>
            <p>Made by scientists, for scientists</p>
          </div>
          <button className="header-button">Click Here to Begin</button>
          </div>
        <div className="w-1/2">
        <img src="/src/assets/landing/headerImageStill.jpg" alt="Search Strategy" className="header-image" />
        </div>
      </header>

      {/* Features Section */}
      <section className="p-12">
        <h2 className="text-2xl font-bold mb-6">Keep up with new publications in your field</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <img src="/assets/landing/featureimage1.png" alt="Search Strategy" />
            <h3 className="mt-2 font-bold">Queries PubMed and arXiv</h3>
            <p>Optimized for biomedical, computer science, mathematics, and physics.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <img src="/assets/landing/featureimage2.png" alt="Search Strategy" />
            <h3 className="mt-2 font-bold">Read what matters</h3>
            <p>PaperScout only sends relevant publications so you can focus on your research.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <img src="/assets/landing/featureimage3.png" alt="Search Strategy" />
            <h3 className="mt-2 font-bold">On the go?</h3>
            <p>We’ll keep you informed no matter where you are.</p>
          </div>
        </div>
      </section>

      {/* Search Strategy Section */}
      <section className="p-12 bg-gray-200">
        <h2 className="text-2xl font-bold mb-6">Develop your search strategy</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-bold">Select your keywords</p>
            <p>Choose which keywords we should include in our search and why we should avoid.</p>
            <p className="font-bold mt-4">Input the entire search strategy</p>
            <p>Know exactly what you are looking for? We will use that for our search.</p>
            <p className="font-bold mt-4">Not sure what to look for?</p>
            <p>Give us a summary of your research work, and we’ll create a search for you.</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Click Here to Sign Up</button>
          </div>
          <img src="/assets/landing/searchstratimage.png" alt="Search Strategy" />
        </div>
      </section>

      {/* Updates Section */}
      <section className="p-12">
        <h2 className="text-2xl font-bold mb-6">Daily, weekly, or monthly updates - wherever you are</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <img src="/assets/landing/searchstratimage.png" alt="Search Strategy" />
            <h3 className="mt-2 font-bold">Sent to your email</h3>
            <p>We will create a summary of the most relevant new publications, sent right to your inbox.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <img src="/assets/landing/searchstratimage.png" alt="Search Strategy" />
            <h3 className="mt-2 font-bold">Get a text</h3>
            <p>Choose to receive updates right on your phone and get a text with new publications.</p>
          </div>
        </div>
      </section>

      {/* Why PaperScout Section */}
      <section className="p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Why PaperScout?</h2>
          <div className="mt-4 space-x-4">
            <button className="border px-4 py-2 rounded">About the app</button>
            <button className="border px-4 py-2 rounded">About the developer</button>
          </div>
        </div>
      </section>



      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-12">
        <div className="mt-6 text-center text-gray-400">
          <p>PaperScout.io</p>
          <p className="mt-2">Get Started | About | More Info</p>
          <p className="mt-2">User Dashboard | Home | Sign Up</p>
          <p className="mt-2">About PaperScout | Privacy Policy</p>
          <p className="mt-2">GitHub Repo | Search Strategies | Contact</p>
        </div>
      </footer>
    </div>
  );
}