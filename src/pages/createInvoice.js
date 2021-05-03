import React, {useState, useContext} from "react";
import {Context} from "../context";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import GoBackButton from "../components/buttons/GoBackButton";
import CreateInvoiceButtonCollection from "../components/button-collections/CreateInvoiceButtonCollection";
import { FormContainer, FieldsetTitle, LongInputField, ShortInputField, FormFieldContainer, FormAllFieldsContainer,
    QuantityInputField, PriceInputField, ItemTotalField, PageBody } from "../components/form-components/form-styes";
import {ReactComponent as DeleteItem} from "../icons/icon-delete.svg";

/* Für jedes nested-Object in state eine eigene handle-Funktion, weil sonst nicht darauf zugegriffen werden kann. */

const initialInvoiceTemplate = {
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
}
const CreateInvoice = () => {
    const context = useContext(Context);  
    const [invoice, setInvoice] = useState(initialInvoiceTemplate);
    const [total, setTotal] = useState(invoice.total);

    const addNewTotal = (quantity, price) => {
        let result = 0;
        result = quantity * price;
        setTotal(result)
    }

    // Zustand wird mit den eingegebenen Werten aus den Inputs gefüllt.
    const handleChange = event => {
        const {name, value} = event.target;
        setInvoice(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                [name]: value
            }
        })
    }


    function addDays(createdAt, days) {
        const date = new Date(createdAt);
        date.setDate(date.getDate() + days);
        //console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDay() + days) );
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
  
    const setPaymentDue = createdAt => {
        console.log("Created At: " + createdAt)
        //const paymentDueValue = addDays(createdAt, 7);
        console.log(addDays(createdAt, 30));
        /*
        const {paymentDue} = {...invoice}
        setInvoice(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                paymentDue: paymentDueValue
            }
        });*/
    }

    const handleChangeSenderAddress = event => {
        const {senderAddress} = {...invoice};
        const currentSenderAddress = senderAddress;
        const {name, value} = event.target;
        currentSenderAddress[name] = value;
        setInvoice(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                senderAddress: currentSenderAddress
            }
        })
    }

    const handleChangeClientAddress = event => {
        const {clientAddress} = {...invoice};
        const currentClientAddress = clientAddress;
        const {name, value} = event.target;
        currentClientAddress[name] = value;
        setInvoice(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                clientAddress: currentClientAddress
            }
        })
    }

    const handleChangeItems = event => {
        const {items} = {...invoice};
        const currentItems = items;
        const {name, value} = event.target;
        currentItems[name] = value;
        setInvoice(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                items: currentItems
            }
        })
    }


    /*
    const handleChangeItemsTotal = (quantity, price) => {
            let result = 0;
            result = quantity * price;
            return result.toLocaleString("en-GB", {minimumFractionDigits: 2});
    }*/

    // Nach Klick auf den Button wird ein alert-Fenster geöffnet.
    const handleSubmit = event => {
        event.preventDefault();
        alert(`New Invoice was added.`);
    }

    return (
        <PageBody>
            <Header />
            <div className="goBackButton">
                <Link to="/"><GoBackButton /></Link>
            </div>
                <FormContainer className="body2">
                    <h1>New Invoice</h1>
                    <form>
                        <FormAllFieldsContainer>
                        <div>
                            <FieldsetTitle>Bill From</FieldsetTitle>
                            
                            <FormFieldContainer>
                                <label>Street Address</label>
                                <LongInputField type="text" name="street" value={invoice.senderAddress.street} onChange={handleChangeSenderAddress}/>
                            </FormFieldContainer>

                            <FormFieldContainer >
                                <div>
                                    <label className="cityLabel">City</label>
                                    <ShortInputField className="cityInput" type="text" name="city" value={invoice.senderAddress.city} onChange={handleChangeSenderAddress}/>
                                
                                    <label className="postCodeLabel">Post Code</label>
                                    <ShortInputField className="postCodeInput" type="text" name="postCode" value={invoice.senderAddress.postCode} onChange={handleChangeSenderAddress}/>
                                </div>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Country</label>
                                <LongInputField type="text" name="country" value={invoice.senderAddress.country} onChange={handleChangeSenderAddress}/>
                            </FormFieldContainer>
                        </div>

                        <div>
                            <FieldsetTitle>Bill To</FieldsetTitle>
                            <FormFieldContainer>
                                <label>Client's Name</label>
                                <LongInputField type="text" name="clientName" value={invoice.clientName} onChange={handleChange}/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Client's Email</label>
                                <LongInputField type="email" name="clientEmail" value={invoice.clientEmail} onChange={handleChange}/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Street Address</label>
                                <LongInputField type="text" name="street" value={invoice.clientAddress.street} onChange={handleChangeClientAddress}/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <div>
                                    <label className="cityLabel">City</label>
                                    <ShortInputField className="cityInput" type="text" name="city" value={invoice.clientAddress.city} onChange={handleChangeClientAddress}/>

                                    <label className="postCodeLabel">Post Code</label>
                                    <ShortInputField className="postCodeInput" type="text" name="postCode" value={invoice.clientAddress.postCode} onChange={handleChangeClientAddress}/>
                                </div>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Country</label>
                                <LongInputField type="text" name="country" value={invoice.clientAddress.country} onChange={handleChangeClientAddress}/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Invoice Date</label>
                                <LongInputField type="date" name="createdAt" value={invoice.createdAt} onChange={handleChange}/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Payment Terms</label>
                                <br />
                                <select name="paymentTerms" value={invoice.paymentTerms} onChange={handleChange} onClick={setPaymentDue(invoice.createdAt)}>
                                    <option value="1">Net 1 Day</option>
                                    <option value="7">Net 7 Days</option>
                                    <option value="30">Net 30 Days</option>
                                </select>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Project Description</label>
                                <LongInputField type="text" name="description" value={invoice.description} onChange={handleChange}/>
                            </FormFieldContainer>
                        </div>
                        
                        <div>
                            <h3>Item List</h3>
                            <FormFieldContainer>
                                <label>Item Name</label>
                                <LongInputField type="text" name="name" value={invoice.items.name} onChange={handleChangeItems}/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <div>
                                    <label className="quantityLabel">Qty.</label>
                                    <QuantityInputField className="quantityInput" type="number" min="0" name="quantity" value={invoice.items.quantity} onChange={handleChangeItems}/>

                                    <label className="priceLabel">Price</label>
                                    <PriceInputField className="priceInput" type="number" min="0.00" name="price" value={invoice.items.price} onChange={handleChangeItems} />

                                    <label className="itemTotalLabel">Total</label>
                                    <ItemTotalField className="itemTotalInput" name="total">{total}</ItemTotalField>

                                    <DeleteItem className="deleteItem" onClick={handleSubmit}></DeleteItem>
                                </div>
                            </FormFieldContainer>
                        </div>
                        </FormAllFieldsContainer>
                        <Link to="/">
                            <button onClick={() => context.addNewInvoice(invoice)}>Add Invoice</button>
                        </Link>
                        
                    </form>
                </FormContainer>
            <CreateInvoiceButtonCollection />
        </PageBody>
    )
}

export default CreateInvoice;
