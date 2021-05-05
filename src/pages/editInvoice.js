import React, {useState, useContext, useEffect} from "react";
import {Context} from "../context";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import GoBackButton from "../components/buttons/GoBackButton";
import CreateInvoiceButtonCollection from "../components/button-collections/CreateInvoiceButtonCollection";
import { FormContainer, FieldsetTitle, LongInputField, ShortInputField, FormFieldContainer, FormAllFieldsContainer,
    QuantityInputField, PriceInputField, ItemTotalField, PageBody } from "../components/form-components/form-styes";



const CreateInvoice = () => {
    const {invoiceId} = useParams();

    const context = useContext(Context); 
    
    // Sucht nach der Rechnung, die bearbeitet werden soll
    const thisInvoice = context.invoices.find(invoice => invoice.id === invoiceId);

    const [invoice, setInvoice] = useState(thisInvoice);

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
        if (!createdAt || !days) return null;
        const date = new Date(createdAt);
       
        date.setDate(date.getDate() + Number(days));
        return (
          date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        );
      }
    
      useEffect(() => {
        setInvoice(prevInvoice => {
          const date = addDays(prevInvoice.createdAt, prevInvoice.paymentTerms);
    
          return {
            ...prevInvoice,
            paymentDue: date
          }
        })
      }, [invoice.paymentTerms]);

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
    
        currentItems[0][name] = value;
        invoice.total = 0;

        for (let i = 0; i < currentItems.length; i++) {
            invoice.items[i].total = currentItems[i].quantity * currentItems[i].price;
            invoice.total += currentItems[i].total;
        }

        setInvoice(prevInvoiceData => {
            return {
                ...prevInvoiceData,
                items: currentItems
            }
        })
    }

    useEffect(() => {
        setInvoice(prevInvoice => {
            // es gibt nur ein nested Array, deshalb [0]
            const total = prevInvoice.items[0].quantity * prevInvoice.items[0].price;
            
            return {
                ...prevInvoice,
                total: total
            }
        });
    }, [invoice.items.price]);

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
                                <LongInputField type="text" name="clientName" value={invoice.clientName} onChange={handleChange} />
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
                                <LongInputField type="date" name="createdAt" value={invoice.createdAt} disabled/>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label>Payment Terms</label>
                                <br />
                                <select name="paymentTerms" value={invoice.paymentTerms} onChange={handleChange} disabled >
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
                                    <LongInputField type="text" name="name" value={invoice.items[0].name} onChange={handleChangeItems}/>
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <div>
                                        <label className="quantityLabel">Qty.</label>
                                        <QuantityInputField className="quantityInput" type="number" min="0" name="quantity" value={invoice.items[0].quantity} onChange={handleChangeItems} />

                                        <label className="priceLabel">Price</label>
                                        <PriceInputField className="priceInput" type="number" min="0.00" name="price" value={invoice.items[0].price} onChange={handleChangeItems} />

                                        <label className="itemTotalLabel">Total</label>
                                        <ItemTotalField className="itemTotalInput" name="total" type="number" value={invoice.items[0].total} readOnly />
                                    </div>
                                </FormFieldContainer> 
                        </div>
                        </FormAllFieldsContainer>
                        
                        <Link to="/">
                            <button onClick={() => context.editInvoice(invoice)}>Save Changes</button>
                        </Link>
                        
                    </form>
                </FormContainer>
                
            <CreateInvoiceButtonCollection />
        </PageBody>
    )
}

export default CreateInvoice;