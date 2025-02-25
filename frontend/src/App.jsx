import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Header from './assets/landingPage/Header.jsx';
import Hero from './assets/landingPage/Hero.jsx';
import Features from './assets/landingPage/Features.jsx';
import SearchStrategy from './assets/landingPage/SearchStrategy.jsx';
import Updates from './assets/landingPage/Updates.jsx';
import PageFooter from './assets/landingPage/PageFooter.jsx';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <Header />
            <Hero />
            <Features />
            <SearchStrategy />
            <Updates />
            <PageFooter />
          </div>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;