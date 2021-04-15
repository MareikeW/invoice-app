import React from "react";
import {InvoiceViewContainer, IdNameAdressContainer, 
    InvoiceInformationContainer, InvoiceData,
    PaymentDue, BillTo, SentTo, InvoiceTotalContainer,
    TotalPrice} from "./invoice-full-view-styles";
import {useParams} from "react-router-dom";
import invoicesData from "../data/data.json";

function InvoiceFullView() {
    const {invoiceId} = useParams();
    
    const thisInvoice = invoicesData.find(invoice => invoice.id === invoiceId);

    return (
        <InvoiceViewContainer>
            <IdNameAdressContainer>
                <h4># {thisInvoice.id}</h4>
                <p>{thisInvoice.description}</p>
                <br />
                <br />
                <p>{thisInvoice.senderAddress.street}</p>
                <p>{thisInvoice.senderAddress.city}</p>
                <p>{thisInvoice.senderAddress.postCode}</p>
                <p>{thisInvoice.senderAddress.country}</p>
            </IdNameAdressContainer>

            <InvoiceInformationContainer>
                <p>Invoice Date</p>
                <InvoiceData>{thisInvoice.createdAt}</InvoiceData>

                <PaymentDue>
                    <p>Payment Due</p>
                    <InvoiceData>{thisInvoice.paymentDue}</InvoiceData>
                </PaymentDue>

                <BillTo>
                    <p>Bill To</p>
                    <InvoiceData>{thisInvoice.clientName}</InvoiceData>
                    <p>{thisInvoice.clientAddress.street}</p>
                    <p>{thisInvoice.clientAddress.city}</p>
                    <p>{thisInvoice.clientAddress.postCode}</p>
                    <p>{thisInvoice.clientAddress.country}</p>
                </BillTo>

                <SentTo>
                    <p>Sent to</p>
                    <InvoiceData>{thisInvoice.clientEmail}</InvoiceData>
                </SentTo>
            </InvoiceInformationContainer>
            
            <InvoiceTotalContainer>
                <div>
                    <h4>{thisInvoice.items[0].name}</h4>
                    <p>{thisInvoice.items[0].quantity} x {thisInvoice.itemPrice}</p>
                    <p>{thisInvoice.items[0].total}</p>
                </div>

                <div>
                    <p>Grand Total</p>
                    <TotalPrice>{thisInvoice.total}</TotalPrice>
                </div>
            </InvoiceTotalContainer>
        </InvoiceViewContainer>
    )
}

export default InvoiceFullView;