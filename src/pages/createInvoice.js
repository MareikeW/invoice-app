import React, {useState} from "react";
import { Link } from "react-router-dom";
import GoBackButton from "../components/buttons/GoBackButton";

const CreateInvoice = () => {  
    const [invoiceData, setInvoiceData] = useState({clientName: "", clientEmail:""});

    // Zustand wird mit den eingegebenen Werten aus den Inputs gefüllt.
    const createInvoice = (event) => {
        const {name, value} = event.target;
        setInvoiceData(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                [name]: value
            }
        })
    }

    // Nach Klick auf den Button wird ein alert-Fenster geöffnet.
    const handleSubmit = event => {
        event.preventDefault();
        alert(`New Invoice was added.`);
    }
    
    return (
            <div>
                <Link to="/"><GoBackButton /></Link>
                <h1>New Invoice</h1>
                <form onSubmit={handleSubmit}>
                    <label>Client's Name</label>
                    <input type="text" name="clientName" value={invoiceData.clientName} onChange={createInvoice}/>

                    <label>Client's Email</label>
                    <input type="email" name="clientEmail" value={invoiceData.clientEmail} onChange={createInvoice}/>

                    <input type="submit" value="+ add new item" />
                    <h3>{invoiceData.clientName}</h3>
                    <h3>{invoiceData.clientEmail}</h3>
                </form>
            </div>
    )
}

export default CreateInvoice;