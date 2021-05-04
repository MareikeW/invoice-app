import React, { useEffect, useState } from "react";
import dataArray from "./data.json";

const Context = React.createContext();

const ContextProvider = (props) => {
    const [invoices, setInvoiceData] = useState([]);

    // Lade die JSON-Daten in State
    useEffect(() => {
        localStorage.setItem("dataArray", JSON.stringify(dataArray));
        let retrievedData = localStorage.getItem("dataArray");
        setInvoiceData(JSON.parse(retrievedData));
    }, []);

    // Lösche Invoice mit passender Id
    // Alle invoices, die nicht der Id entsprechen werden in state als neues Array gespeichert
    const clearInvoiceData = id => {
        const filteredInvoices = invoices.filter(invoice => invoice.id !== id);
        localStorage.setItem("dataArray", JSON.stringify(filteredInvoices));
        let retrievedData = localStorage.getItem("dataArray");
        setInvoiceData(JSON.parse(retrievedData));
    }

    // Bearbeite Invoice mit passender Id
    const editInvoice = updatedInvoice => {
        const index = invoices.findIndex(invoice => invoice.id === updatedInvoice.id);
        invoices[index] = updatedInvoice;
    }

    // Füge eine neue Invoice ans Ende des Arrays im Zustand
    const addNewInvoice = newInvoice => {
        newInvoice.status = "pending";
        newInvoice.id = addNewId();
        setInvoiceData(prevInvoices => [...prevInvoices, newInvoice]);
    }

    const addNewDraft = newDraft => {
        newDraft.status = "draft";
        newDraft.id = addNewId();
        setInvoiceData(prevInvoices => [...prevInvoices, newDraft]);
    }

    // Ändert den Status zu "paid"
    const setStatusToPaid = id => {
        const index = invoices.findIndex(invoice => invoice.id === id);
        invoices[index].status = "paid";
    }

    // Fügt eine neugenerierte Id zur neuen Invoice hinzu
    const addNewId = () => {
        let ID = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let digits = "0123456789";

        for ( let i = 0; i < 2; i++ ) {
            ID += characters.charAt(Math.floor(Math.random() * 26));
        }

        for (let i = 0; i < 4; i++) {
            ID += digits.charAt(Math.floor(Math.random() * 10))
        }

        return ID;
    }
    
    return (
        <Context.Provider value={{ invoices, setInvoiceData, clearInvoiceData, editInvoice, addNewInvoice, addNewDraft, setStatusToPaid }} >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};