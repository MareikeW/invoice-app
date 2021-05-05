import React, {useState, useContext, useEffect} from "react";
import {Context} from "../context";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import GoBackButton from "../components/buttons/GoBackButton";
import { FormContainer, FieldsetTitle, LongInputField, ShortInputField, FormFieldContainer, FormAllFieldsContainer,
    QuantityInputField, PriceInputField, ItemTotalField, PageBody, BillFromContainer, BillToContainer, FormDatePaymentTermsContainer, ItemListContainer } from "../components/form-components/form-styes";
import {emptyInvoiceTemplate} from "../utils/emptyInvoiceTemplate";
import {StyledDiscardBtn, StyledDraftBtn, StyledSaveSendBtn, DiscardDraftSaveContainer} from "../components/buttons/button-styles";

/* Für jedes nested-Object in state eine eigene handle-Funktion, weil sonst nicht darauf zugegriffen werden kann. */

const CreateInvoice = () => {
    const context = useContext(Context);  
    const [invoice, setInvoice] = useState(emptyInvoiceTemplate);

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

    const addDays = (createdAt, days) => {
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
                            <BillFromContainer>
                                <FieldsetTitle>Bill From</FieldsetTitle>
                                
                                <FormFieldContainer>
                                    <label>Street Address</label>
                                    <LongInputField type="text" name="street" value={invoice.senderAddress.street} onChange={handleChangeSenderAddress}/>
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <div>
                                        <label className="cityLabel">City</label>
                                        <ShortInputField className="cityInput" type="text" name="city" value={invoice.senderAddress.city} onChange={handleChangeSenderAddress}/>
                                    
                                        <label className="postCodeLabel">Post Code</label>
                                        <ShortInputField className="postCodeInput" type="text" name="postCode" value={invoice.senderAddress.postCode} onChange={handleChangeSenderAddress}/>
                                    </div>
                                </FormFieldContainer>

                                <FormFieldContainer>
                                    <label className="countryLabel">Country</label>
                                    <LongInputField className="countryInput" type="text" name="country" value={invoice.senderAddress.country} onChange={handleChangeSenderAddress}/>
                                </FormFieldContainer>
                            </BillFromContainer>

                            <BillToContainer>
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
                                    <label className="countryLabel">Country</label>
                                    <LongInputField className="countryInput" type="text" name="country" value={invoice.clientAddress.country} onChange={handleChangeClientAddress}/>
                                </FormFieldContainer>

                                <FormDatePaymentTermsContainer>
                                    <FormFieldContainer>
                                        <label className="invoiceDateLabel">Invoice Date</label>
                                        <LongInputField className="invoiceDateInput" type="date" name="createdAt" value={invoice.createdAt} disabled/>
                                    </FormFieldContainer>

                                    <FormFieldContainer>
                                        <label className="paymentTermsLabel">Payment Terms</label>
                                        <br />
                                        <select className="paymentTermsSelect" name="paymentTerms" value={invoice.paymentTerms} onChange={handleChange}>
                                            <option value="1">Net 1 Day</option>
                                            <option value="7">Net 7 Days</option>
                                            <option value="30">Net 30 Days</option>
                                        </select>
                                    </FormFieldContainer>
                                </FormDatePaymentTermsContainer>

                                <FormFieldContainer>
                                    <label>Project Description</label>
                                    <LongInputField type="text" name="description" value={invoice.description} onChange={handleChange}/>
                                </FormFieldContainer>
                            </BillToContainer>
                        
                            <ItemListContainer>
                                <h3>Item List</h3>
                                    <FormFieldContainer>
                                        <label className="itemInputLabel">Item Name</label>
                                        <LongInputField className="itemNameInput" type="text" name="name" value={invoice.items[0].name} onChange={handleChangeItems}/>
                                    </FormFieldContainer>

                                    <FormFieldContainer>
                                        <div className="itemInfo">
                                            <label className="quantityLabel">Qty.</label>
                                            <QuantityInputField className="quantityInput" type="number" min="0" name="quantity" value={invoice.items[0].quantity} onChange={handleChangeItems} />

                                            <label className="priceLabel">Price</label>
                                            <PriceInputField className="priceInput" type="number" min="0.00" name="price" value={invoice.items[0].price} onChange={handleChangeItems} />

                                            <label className="itemTotalLabel">Total</label>
                                            <ItemTotalField className="itemTotalInput" name="total" type="number" value={invoice.items[0].total} readOnly />
                                        </div>
                                    </FormFieldContainer> 
                            </ItemListContainer>
                        </FormAllFieldsContainer>
                        <DiscardDraftSaveContainer>
                            <StyledDiscardBtn onClick={() => setInvoice(emptyInvoiceTemplate)}>Discard</StyledDiscardBtn>
                            <Link to="/">
                                <StyledDraftBtn className="saveAsDraft" onClick={() => context.addNewDraft(invoice)}>Save As Draft</StyledDraftBtn>
                            </Link>
                            <Link to="/">
                                <StyledSaveSendBtn onClick={() => context.addNewInvoice(invoice)}>Save & Send</StyledSaveSendBtn>
                            </Link>
                        </DiscardDraftSaveContainer>
                    </form>
                </FormContainer>
        </PageBody>
    )
}

export default CreateInvoice;
