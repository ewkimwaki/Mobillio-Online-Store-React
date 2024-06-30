import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import Auth from './views/auth';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Get the root element (likely with id 'root')
const container = document.getElementById('app'); // Assuming your root element has id 'app'
const root = createRoot(container); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);