import React, {useState} from "react";
import { Link } from "react-router-dom";
import GoBackButton from "../components/buttons/GoBackButton";

/* Für jedes nested-Object in state eine eigene handle-Funktion, weil sonst nicht darauf zugegriffen werden kann. */
const CreateInvoice = () => {  
    const [invoiceData, setInvoiceData] = useState({
        id: "",
        createdAt: "",
        paymentDue: "",
        description: "",
        paymentTerms: 0,
        clientName: "", 
        clientEmail: "",
        status: "", 
        senderAddress: { 
            street: "",
            city: "",
            postCode: "",
            country: ""
        },
        clientAddress: { 
            street: "",
            city: "",
            postCode: "",
            country: ""
        },
        items: [
            {
            name: "",
            quantity: 0,
            price: 0,
            total: 0
            }
        ],
        total: 0
    });

    // Zustand wird mit den eingegebenen Werten aus den Inputs gefüllt.
    const handleChange = event => {
        const {name, value} = event.target;
        setInvoiceData(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                [name]: value
            }
        })
    }

    const handleChangeSenderAddress = event => {
        const {senderAddress} = {...invoiceData};
        const currentSenderAddress = senderAddress;
        const {name, value} = event.target;
        currentSenderAddress[name] = value;
        setInvoiceData(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                clientAddress: currentSenderAddress
            }
        })
    }

    const handleChangeClientAddress = event => {
        const {clientAddress} = {...invoiceData};
        const currentClientAddress = clientAddress;
        const {name, value} = event.target;
        currentClientAddress[name] = value;
        setInvoiceData(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                clientAddress: currentClientAddress
            }
        })
    }

    const handleChangeItems = event => {
        const {items} = {...invoiceData};
        const currentItems = items;
        const {name, value} = event.target;
        currentItems[name] = value;
        setInvoiceData(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                items: currentItems
            }
        })
    }

    // Nach Klick auf den Button wird ein alert-Fenster geöffnet.
    const handleSubmit = event => {
        event.preventDefault();
        alert(`New Invoice was added.`);
    }

    console.log(invoiceData);

    return (
            <div>
                <Link to="/"><GoBackButton /></Link>
                <h1>New Invoice</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <p>Bill From</p>
                        <label>Street Address</label>
                        <input type="text" name="street" value={invoiceData.senderAddress.street} onChange={handleChangeSenderAddress}/>
                        
                        <label>City</label>
                        <input type="text" name="city" value={invoiceData.senderAddress.city} onChange={handleChangeSenderAddress}/>

                        <label>Post Code</label>
                        <input type="text" name="postCode" value={invoiceData.senderAddress.postCode} onChange={handleChangeSenderAddress}/>

                        <label>Country</label>
                        <input type="text" name="country" value={invoiceData.senderAddress.country} onChange={handleChangeSenderAddress}/>
                    </fieldset>

                    <fieldset>
                        <p>Bill To</p>
                        <label>Client's Name</label>
                        <input type="text" name="clientName" value={invoiceData.clientName} onChange={handleChange}/>

                        <label>Client's Email</label>
                        <input type="email" name="clientEmail" value={invoiceData.clientEmail} onChange={handleChange}/>

                        <label>Street Address</label>
                        <input type="text" name="street" value={invoiceData.clientAddress.street} onChange={handleChangeClientAddress}/>
                        
                        <label>City</label>
                        <input type="text" name="city" value={invoiceData.clientAddress.city} onChange={handleChangeClientAddress}/>

                        <label>Post Code</label>
                        <input type="text" name="postCode" value={invoiceData.clientAddress.postCode} onChange={handleChangeClientAddress}/>

                        <label>Country</label>
                        <input type="text" name="country" value={invoiceData.clientAddress.country} onChange={handleChangeClientAddress}/>

                        <label>Invoice Date</label>
                        <input type="date" name="createdAt" value={invoiceData.createdAt} onChange={handleChange}/>

                        <label>Payment Terms</label>
                        <select name="paymentTerms" value={invoiceData.paymentTerms} onChange={handleChange}>
                            <option value="1">Net 1 Day</option>
                            <option value="7">Net 7 Days</option>
                            <option value="30">Net 30 Days</option>
                        </select>

                        <label>Project Description</label>
                        <input type="text" name="description" value={invoiceData.description} onChange={handleChange}/>
                    </fieldset>
                    
                    <fieldset>
                        <h3>Item List</h3>
                        <label>Item Name</label>
                        <input type="text" name="name" value={invoiceData.items.name} onChange={handleChangeItems}/>

                        <label>Qty.</label>
                        <input type="number" name="quantity" value={invoiceData.items.quantity} onChange={handleChangeItems}/>

                        <label>Price</label>
                        <input type="number" name="price" value={invoiceData.items.price} onChange={handleChangeItems}/>

                        <label>Total</label>
                        <input type="number" name="total" value={invoiceData.items.total} onChange={handleChangeItems}/>
                    </fieldset>
                    <input type="submit" value="+ add new item" />
                    <h3>{invoiceData.clientName}</h3>
                    <h3>{invoiceData.clientEmail}</h3>
                    <h3>{invoiceData.clientAddress.street}</h3>
                </form>
            </div>
    )
}

export default CreateInvoice;