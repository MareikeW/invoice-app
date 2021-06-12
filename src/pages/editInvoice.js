import React, {useState, useContext, useEffect} from "react";
import {Context} from "../context";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import GoBackButton from "../components/buttons/GoBackButton";
import LongInputField from "../components/form-components/LongInputField";
import ShortInputField from "../components/form-components/ShortInputField";
import QuantityInputField from "../components/form-components/QuantityInputField";

import { FormContainer, FieldsetTitle, FormFieldContainer, FormAllFieldsContainer,
    PageBody, StyledBillFromContainer, StyledBillToContainer, FormDatePaymentTermsContainer, ItemListContainer } from "../components/form-components/form-styes";
import {SaveChangesBtn, SaveChangesBtnContainer} from "../components/buttons/button-styles";


const EditInvoice = () => {
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
        const {senderAddress} = invoice;
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
        const {clientAddress} = invoice;
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
        const {items} = invoice;
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
                    <h1>Edit #{invoice.id}</h1>
                    <form >
                        <FormAllFieldsContainer>
                            <StyledBillFromContainer>
                                <FieldsetTitle>Bill From</FieldsetTitle>
                                
                                <FormFieldContainer>
                                    <LongInputField label="Street Address" type="text" name="street" value={invoice.senderAddress.street} functionName={handleChangeSenderAddress}/>
                               </FormFieldContainer>

                                <FormFieldContainer>
                                    <div>
                                        <ShortInputField labelClass="cityLabel" label="City" inputClass="cityInput" type="text" name="city" value={invoice.senderAddress.city} functionName={handleChangeSenderAddress}/>
                                    
                                        <ShortInputField labelClass="postCodeLabel" label="Post Code" inputClass="postCodeInput" type="text" name="postCode" value={invoice.senderAddress.postCode} functionName={handleChangeSenderAddress}/>
                                    </div>
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <LongInputField labelClass="countryLabel" label="Country" inputClass="countryInput" type="text" name="country" value={invoice.senderAddress.country} functionName={handleChangeSenderAddress} />
                                </FormFieldContainer>
                            </StyledBillFromContainer>

                            <StyledBillToContainer>
                                <FieldsetTitle>Bill To</FieldsetTitle>
                                <FormFieldContainer>
                                    <LongInputField label="Client's Name" type="text" name="clientName" value={invoice.clientName} functionName={handleChange} />
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <LongInputField label="Client's Email" type="email" name="clientEmail" value={invoice.clientEmail} functionName={handleChange} />
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <LongInputField label="Street Address" type="text" name="street" value={invoice.clientAddress.street} functionName={handleChangeClientAddress} />
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <div>
                                        <ShortInputField labelClass="cityLabel" label="City" inputClass="cityInput" type="text" name="city" value={invoice.clientAddress.city} functionName={handleChangeClientAddress}/>

                                        <ShortInputField labelClass="postCodeLabel" label="Post Code" inputClass="postCodeInput" type="text" name="postCode" value={invoice.clientAddress.postCode} functionName={handleChangeClientAddress}/>
                                    </div>
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <LongInputField labelClass="countryLabel" label="Country" inputClass="countryInput" type="text" name="country" value={invoice.clientAddress.country} functionName={handleChangeClientAddress} />
                                </FormFieldContainer>

                                <FormDatePaymentTermsContainer>
                                    <FormFieldContainer>
                                        <LongInputField labelClass="invoiceDateLabel" label="Invoice Date" inputClass="invoiceDateInput" type="date" name="createdAt" value={invoice.createdAt} functionName={handleChange} />
                                    </FormFieldContainer>

                                    <FormFieldContainer>
                                        <label className="paymentTermsLabel">Payment Terms</label>
                                        <br />
                                        <select className="paymentTermsSelect" name="paymentTerms" value={invoice.paymentTerms} onChange={handleChange} required>
                                            <option value="1">Net 1 Day</option>
                                            <option value="7">Net 7 Days</option>
                                            <option value="30">Net 30 Days</option>
                                        </select>
                                    </FormFieldContainer>
                                </FormDatePaymentTermsContainer>

                                <FormFieldContainer>
                                    <LongInputField label="Project Description" type="text" name="description" value={invoice.description} functionName={handleChange} />
                                </FormFieldContainer>
                            </StyledBillToContainer>
                        
                            <ItemListContainer>
                                <h3>Item List</h3>
                                    <FormFieldContainer>
                                        <LongInputField labelClass="itemInputLabel" label="Item Name" inputClass="itemNameInput" type="text" name="name" value={invoice.items[0].name} functionName={handleChangeItems} />
                                    </FormFieldContainer>

                                    <FormFieldContainer>
                                        <div className="itemInfo">
                                            <QuantityInputField labelClass="quantityLabel" label="Qty." inputClass="quantityInput" type="number" min="0" name="quantity" value={invoice.items[0].quantity} functionName={handleChangeItems} required />

                                            <QuantityInputField labelClass="priceLabel" label="Price" inputClass="priceInput" type="number" min="0.00" name="price" value={invoice.items[0].price} functionName={handleChangeItems} required />

                                            <QuantityInputField labelClass="itemTotalLabel" label="Total" inputClass="itemTotalInput" type="number" name="total" value={invoice.items[0].total} readOnly />
                                        </div>
                                    </FormFieldContainer> 
                            </ItemListContainer>
                        </FormAllFieldsContainer>
                        
                        <SaveChangesBtnContainer>
                            <Link to="/">
                                <SaveChangesBtn onClick={() => context.editInvoice(invoice)}>Save Changes</SaveChangesBtn>
                            </Link>
                        </SaveChangesBtnContainer>
                    </form>
                </FormContainer>

        </PageBody>
    )
}

export default EditInvoice;