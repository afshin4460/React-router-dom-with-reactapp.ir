import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Invoices from './components/invoices';
import Expenses from './components/expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='expenses' element={<Expenses />} />
    </Routes>
  </Router>
);
