import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
{/*
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import Profile from './Profile.jsx';
import AboutDev from './AboutDev.jsx';
import About from './About.jsx';
import NewQ from './NewQuery.jsx';
import History from './SearchHistory.jsx'
import Prev from './PastSearch.jsx'
*/}
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
      {/*
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pastsearches" element={<Prev />} />
      <Route path="/searchhistory" element={<History />} />
      <Route path="/newquery" element={<NewQ />} />

      <Route path="/aboutpaperscout" element={<About />} />
      <Route path="/aboutthedeveloper" element={<AboutDev />} />
      */}
    </Routes>
  );
}

export default App;