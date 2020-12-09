import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { HappyPlants } from './HappyPlants.js';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HappyPlants />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


