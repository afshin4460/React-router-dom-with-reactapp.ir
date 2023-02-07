import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getInvoice, deleteInvoice} from '../data';

function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    const navigate = useNavigate();

    const handleClick = () => {
        deleteInvoice(invoice.number);
        navigate('/invoices');
    };

    return (
        <main style={{padding:'1rem'}}>
            <h2>Total due: {invoice.amount}</h2>
            <p>{invoice.name}: {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>
            <button onClick={handleClick} style={{width:'100%'}}>Delete</button>
        </main>
    );
}

export default Invoice;
