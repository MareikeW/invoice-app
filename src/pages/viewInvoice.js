import React from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import ViewInvoiceButtonCollection from "../components/button-collections/ViewInvoiceButtonCollection";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import invoicesData from "../data/data.json";
import {InvoiceViewContainer, IdNameAdressContainer, 
    InvoiceInformationContainer, InvoiceData,
    PaymentDue, BillTo, SentTo, InvoiceTotalContainer,
    TotalPrice} from "../components/invoice-full-view/invoice-full-view-styles.js";

function ViewInvoice() {
    /*const invoiceData = invoicesData.map(invoice => {
        return (
            <InvoiceFullView 
            key={invoice.id} 
            id={invoice.id} 
            description={invoice.description}
            street={invoice.senderAddress.street}
            city={invoice.senderAddress.city}
            postCode={invoice.senderAddress.postCode}
            country={invoice.senderAddress.country}
            invoiceDate={invoice.createdAt}
            clientName={invoice.clientName}
            clientStreet={invoice.clientAddress.street}
            clientCity={invoice.clientAddress.city}
            clientPostCode={invoice.clientAddress.postCode}
            clientCountry={invoice.clientAddress.country}
            clientEmail={invoice.clientEmail}
            paymentDue={invoice.paymentDue}
            itemName={invoice.items[0].name}
            itemQuantity={invoice.items[0].quantity}
            itemPrice={invoice.items[0].price}
            itemTotal={invoice.items[0].total}
            total={invoice.total}
            status={invoice.status}
            />
        )
    })*/
    const {invoiceId} = useParams();
    
    const thisInvoice = invoicesData.find(invoice => invoice.id === invoiceId);
    

    return (
        <div>
            <Link to="/"><GoBackButton /></Link>
            <div>Status <span>Pending</span></div>
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
            <ViewInvoiceButtonCollection />
        </div>
    )
}

export default ViewInvoice;