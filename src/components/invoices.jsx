import React from 'react';
import {NavLink, Outlet, useSearchParams} from 'react-router-dom';
import {getInvoices} from '../data';
import './invoices.css';

function Invoices() {
    let invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (event) => {
        let filter = event.target.value;
        if(filter) {
            setSearchParams({filter});
        } else {
            setSearchParams({});
        }
    };

    return (
        <div style={{display: 'flex'}}>
            <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                <input type="text" value={searchParams.get('filter') || ''} onChange={handleChange} />
                {
                    invoices.filter(invoice => {
                        let filter = searchParams.get('filter');
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    }).map(invoice => (
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