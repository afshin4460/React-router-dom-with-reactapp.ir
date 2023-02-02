import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Invoices from './components/invoices';
import Expenses from './components/expenses';
import Invoice from './components/invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='invoices' element={<Invoices />}>
          <Route index element={
            <main style={{padding:'1rem'}}>
              <h3>Slecte an Invoice</h3>
            </main>
          } />
          <Route path=':invoiceId' element={<Invoice />} /> 
        </Route>
        <Route path='expenses' element={<Expenses />} />
        <Route path='*' element={
          <main style={{padding: '1rem'}}>
            <p>Theres Noting Here</p>
          </main>
        } />
      </Route>
    </Routes>
  </Router>
);
