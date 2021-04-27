import React, { useEffect, useState } from "react";

const Context = React.createContext();

const ContextProvider = (props) => {
    const [invoices, setInvoiceData] = useState([]);

    const getInvoiceData = () => {
        fetch("../data.json")
        .then(function(response){
            //console.log(response);
            return response.json();
        })
        .then(function(myJson) {
            //console.log(myJson);
            setInvoiceData(myJson);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getInvoiceData()
    }, []);
    
    return (
        <Context.Provider value={{ invoices, setInvoiceData }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};