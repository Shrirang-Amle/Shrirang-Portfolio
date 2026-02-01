import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMoon, faSun, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Contact from './pages/Contact';
import './App.css';

function AnimatedMainContent({ children, darkMode, sidebarCollapsed }: { children: React.ReactNode, darkMode: boolean, sidebarCollapsed: boolean }) {
  const location = useLocation();
  const [fadeKey, setFadeKey] = React.useState(location.pathname);

  React.useEffect(() => {
    setFadeKey(location.pathname + Date.now());
  }, [location]);

  return (
    <main
      key={fadeKey}
      className={`main-content px-4${darkMode ? ' dark-main' : ''}${sidebarCollapsed ? ' sidebar-collapsed' : ''} fade-in`}
    >
      {children}
    </main>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const year = new Date().getFullYear();

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="container-fluid">
        <nav className={`sidebar bg-light py-4 d-flex flex-column justify-content-between${darkMode ? ' dark-sidebar' : ''}${sidebarCollapsed ? ' collapsed' : ''}`}>
          <div className="text-end mb-3">
            <button 
              className="btn btn-sm btn-outline-secondary" 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              <FontAwesomeIcon icon={sidebarCollapsed ? faChevronRight : faChevronLeft} />
            </button>
          </div>

          <div className={sidebarCollapsed ? 'd-none' : ''}>
            <div className="text-center">
              <img src={process.env.PUBLIC_URL + '/assets/images/Photo.jpg'} className="rounded-circle mb-3" width={100} alt="Profile" />
              <h4>Shrirang Ganesh Amle</h4>
              <p className="text-muted">Full Stack Web Developer</p>
            </div>
            <ul className="nav flex-column text-center">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
              <li className="nav-item"><Link to="/stack" className="nav-link">Stack</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>

          <div className={sidebarCollapsed ? 'd-none' : ''}>
            <div className="text-center mb-3">
              <a href="https://github.com/Shrirang-Amle" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark" title="GitHub">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/shrirang-amle-2a35a427b/" target="_blank" rel="noopener noreferrer" className="mx-2 text-primary" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.hackerrank.com/profile/shrirang_amle201" target="_blank" rel="noopener noreferrer" className="mx-2 text-success" title="HackerRank">
                <FontAwesomeIcon icon={faHackerrank} size="2x" />
              </a>
              <a href="https://leetcode.com/u/shrirangamle2004/" target="_blank" rel="noopener noreferrer" className="mx-2 text-warning" title="LeetCode">
                <FontAwesomeIcon icon={faCode} size="2x" />
              </a>
              <div className="text-center mt-4">
                <button className="btn btn-outline-secondary" onClick={() => setDarkMode(!darkMode)} title="Toggle dark mode">
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
              </div>
            </div>
            <div className="text-center text-muted mb-2" style={{ fontSize: '0.95em' }}>
              &copy; {year} Shrirang Amle
            </div>
          </div>
        </nav>
        <AnimatedMainContent darkMode={darkMode} sidebarCollapsed={sidebarCollapsed}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatedMainContent>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
