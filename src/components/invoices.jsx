import React from 'react';
import {Link} from 'react-router-dom';
import {getInvoices} from '../data';

function Invoices() {
    let invoices = getInvoices();
    return (
        <div style={{display: 'flex'}}>
            <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                {
                    invoices.map(invoice => (
                        <Link key={invoice.number} to={`/invoices/${invoice.number}`} style={{display: 'block', margin: '1rem 0'}}>
                            { invoice.name }
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
}

export default Invoices;