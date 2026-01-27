import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import VideosPage from './pages/VideosPage';
import AIProductsPage from './pages/AIProductsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/ai-products" component={AIProductsPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/videos" component={VideosPage} />
      </Switch>
    </Router>
  );
}

export default App;
