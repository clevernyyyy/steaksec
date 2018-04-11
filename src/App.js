import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

// Import Components
import NavBar from './components/NavBar/NavBar';

// Import Pages
import Home from './pages/Home/Home';
import Slack from './pages/Slack/Slack';
import Calendar from './pages/Calendar/Calendar';

// Import About Routes
import Minutes from './pages/About/Minutes';
import ByLaws from './pages/About/ByLaws';

const App = () => (
  <Router>
    <div>
      <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/slack" component={Slack} />
          <Route path="/calendar" component={Calendar} />

          {/* About */} 
          <Route path="/minutes" component={Minutes} />
          <Route path="/bylaws" component={ByLaws} />
        </div>
    </div>
  </Router>
);

export default App
