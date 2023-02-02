import React from 'react';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <>
      <div>Hello</div>
      <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem'}}>
        <NavLink to='/invoices'>Invoices</NavLink> |{' '}
        <NavLink to='/expenses'>Expenses</NavLink>
      </nav>
    </>
  );
}

export default App;
