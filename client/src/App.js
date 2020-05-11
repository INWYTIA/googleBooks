import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
