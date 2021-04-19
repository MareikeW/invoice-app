import React, { useEffect, useState } from "react";
import invoiceData from "./data/data.json";

const Context = React.createContext();

const ContextProvider = (props) => {
    const [invoices, setInvoiceData] = useState({});
    
    useEffect(() => {
        fetch(invoiceData)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setInvoiceData(data);
        })
    }, []);

    return (
        <Context.Provider value={{ invoices, setInvoiceData }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};