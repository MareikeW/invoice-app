import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import GoBackButton from "../components/buttons/GoBackButton";
import CreateInvoiceButtonCollection from "../components/button-collections/CreateInvoiceButtonCollection";
import { FormContainer, FieldsetTitle, LongInputField, ShortInputField, FormFieldContainer, FormAllFieldsContainer,
    QuantityInputField, PriceInputField, ItemTotalField, NewItemButton, PageBody } from "../components/form-components/form-styes";
import {ReactComponent as DeleteItem} from "../icons/icon-delete.svg";
import {toCurrencyFormat} from "../utils/utils";

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
                senderAddress: currentSenderAddress
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

    const handleChangeItemsTotal = (quantity, price) => {
            let result = 0;
            result = quantity * price;
            return result.toLocaleString("en-GB", {minimumFractionDigits: 2});
    }

    // Nach Klick auf den Button wird ein alert-Fenster geöffnet.
    const handleSubmit = event => {
        event.preventDefault();
        alert(`New Invoice was added.`);
    }

    console.log(invoiceData.items);

    return (
        <PageBody>
        <Header />
        <div className="goBackButton">
            <Link to="/"><GoBackButton /></Link>
        </div>
            <FormContainer className="body2">
                <h1>New Invoice</h1>
                <form onSubmit={handleSubmit}>
                    <FormAllFieldsContainer>
                    <div>
                        <FieldsetTitle>Bill From</FieldsetTitle>
                        
                        <FormFieldContainer>
                            <label>Street Address</label>
                            <LongInputField type="text" name="street" value={invoiceData.senderAddress.street} onChange={handleChangeSenderAddress}/>
                        </FormFieldContainer>

                        <FormFieldContainer >
                            <div>
                                <label className="cityLabel">City</label>
                                <ShortInputField className="cityInput" type="text" name="city" value={invoiceData.senderAddress.city} onChange={handleChangeSenderAddress}/>
                            
                                <label className="postCodeLabel">Post Code</label>
                                <ShortInputField className="postCodeInput" type="text" name="postCode" value={invoiceData.senderAddress.postCode} onChange={handleChangeSenderAddress}/>
                            </div>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Country</label>
                            <LongInputField type="text" name="country" value={invoiceData.senderAddress.country} onChange={handleChangeSenderAddress}/>
                        </FormFieldContainer>
                    </div>

                    <div>
                        <FieldsetTitle>Bill To</FieldsetTitle>
                        <FormFieldContainer>
                            <label>Client's Name</label>
                            <LongInputField type="text" name="clientName" value={invoiceData.clientName} onChange={handleChange}/>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Client's Email</label>
                            <LongInputField type="email" name="clientEmail" value={invoiceData.clientEmail} onChange={handleChange}/>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Street Address</label>
                            <LongInputField type="text" name="street" value={invoiceData.clientAddress.street} onChange={handleChangeClientAddress}/>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <div>
                                <label className="cityLabel">City</label>
                                <ShortInputField className="cityInput" type="text" name="city" value={invoiceData.clientAddress.city} onChange={handleChangeClientAddress}/>

                                <label className="postCodeLabel">Post Code</label>
                                <ShortInputField className="postCodeInput" type="text" name="postCode" value={invoiceData.clientAddress.postCode} onChange={handleChangeClientAddress}/>
                            </div>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Country</label>
                            <LongInputField type="text" name="country" value={invoiceData.clientAddress.country} onChange={handleChangeClientAddress}/>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Invoice Date</label>
                            <LongInputField type="date" name="createdAt" value={invoiceData.createdAt} onChange={handleChange}/>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Payment Terms</label>
                            <br />
                            <select name="paymentTerms" value={invoiceData.paymentTerms} onChange={handleChange}>
                                <option value="1">Net 1 Day</option>
                                <option value="7">Net 7 Days</option>
                                <option value="30">Net 30 Days</option>
                            </select>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <label>Project Description</label>
                            <LongInputField type="text" name="description" value={invoiceData.description} onChange={handleChange}/>
                        </FormFieldContainer>
                    </div>
                    
                    <div>
                        <h3>Item List</h3>
                        <FormFieldContainer>
                            <label>Item Name</label>
                            <LongInputField type="text" name="name" value={invoiceData.items.name} onChange={handleChangeItems}/>
                        </FormFieldContainer>

                        <FormFieldContainer>
                            <div>
                                <label className="quantityLabel">Qty.</label>
                                <QuantityInputField className="quantityInput" type="number" min="0" name="quantity" value={invoiceData.items.quantity} onChange={handleChangeItems}/>

                                <label className="priceLabel">Price</label>
                                <PriceInputField className="priceInput" type="number" min="0.00" name="price" value={invoiceData.items.price} onChange={handleChangeItems} />

                                <label className="itemTotalLabel">Total</label>
                                <ItemTotalField className="itemTotalInput" name="total">{(invoiceData.items.quantity && invoiceData.items.price) === undefined ? "0" : handleChangeItemsTotal(invoiceData.items.quantity, invoiceData.items.price)}</ItemTotalField>

                                <DeleteItem className="deleteItem">D</DeleteItem>
                            </div>
                        </FormFieldContainer>
                    </div>
                    </FormAllFieldsContainer>
                </form>
            </FormContainer>
            <CreateInvoiceButtonCollection />
        </PageBody>
    )
}

export default CreateInvoice;
