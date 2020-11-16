import React from 'react';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import RoutesModule from './routes';

function App() {
  return (
    <Router>
      <RoutesModule />
    </Router>
  );
}

export default App;
