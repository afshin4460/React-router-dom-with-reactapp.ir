import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {getInvoices} from '../data';
import './invoices.css';

function Invoices() {
    let invoices = getInvoices();
    return (
        <div style={{display: 'flex'}}>
            <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                {
                    invoices.map(invoice => (
                        <NavLink key={invoice.number} to={`/invoices/${invoice.number}`} className={
                            ({isActive}) => isActive ? 'link red' : 'link blue'
                        }>
                            { invoice.name }
                        </NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    );
}

export default Invoices;