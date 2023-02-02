import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {getInvoices} from '../data';

function Invoices() {
    let invoices = getInvoices();
    return (
        <div style={{display: 'flex'}}>
            <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                {
                    invoices.map(invoice => (
                        <NavLink key={invoice.number} to={`/invoices/${invoice.number}`} style={({isActive}) => {
                            return {
                                display: 'block',
                                margin: '1rem',
                                color: isActive ? 'red' : ''
                            }
                        }}>
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