import React from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import ViewInvoiceButtonCollection from "../components/button-collections/ViewInvoiceButtonCollection";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import invoicesData from "../data/data.json";
import {InvoiceViewContainer, IdNameAdressContainer, 
    InvoiceInformationContainer, InvoiceData,
    PaymentDue, BillTo, SentTo, InvoiceTotalContainer,
    TotalPrice, StatusContainer, StatusWord, StatusName, BillToAddress, TotalPriceContainer,
    GrandTotalTerm } from "../components/invoice-full-view/invoice-full-view-styles.js";
    import { toReformattedDate, toCurrencyFormat } from "../utils/utils.js";

function ViewInvoice() {
    const {invoiceId} = useParams();
    
    const thisInvoice = invoicesData.find(invoice => invoice.id === invoiceId);
    

    return (
        <div>
            <Link to="/"><GoBackButton /></Link>
            <StatusContainer><StatusWord>Status</StatusWord><StatusName>{thisInvoice.status}</StatusName></StatusContainer>
            <InvoiceViewContainer className="body2">
                <IdNameAdressContainer>
                    <h4># {thisInvoice.id}</h4>
                    <p>{thisInvoice.description}</p>
                    <br />
                    <p>{thisInvoice.senderAddress.street}</p>
                    <p>{thisInvoice.senderAddress.city}</p>
                    <p>{thisInvoice.senderAddress.postCode}</p>
                    <p>{thisInvoice.senderAddress.country}</p>
                </IdNameAdressContainer>

                <InvoiceInformationContainer>
                    <p>Invoice Date</p>
                    <InvoiceData>{toReformattedDate(thisInvoice.createdAt)}</InvoiceData>

                    <PaymentDue>
                        <p>Payment Due</p>
                        <InvoiceData>{toReformattedDate(thisInvoice.paymentDue)}</InvoiceData>
                    </PaymentDue>

                    <BillTo>
                        <p>Bill To</p>
                        <InvoiceData>{thisInvoice.clientName}</InvoiceData>
                        <BillToAddress>
                            <p>{thisInvoice.clientAddress.street}</p>
                            <p>{thisInvoice.clientAddress.city}</p>
                            <p>{thisInvoice.clientAddress.postCode}</p>
                            <p>{thisInvoice.clientAddress.country}</p>
                        </BillToAddress>
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
                        <p>£ {toCurrencyFormat(thisInvoice.items[0].total)}</p>
                    </div>

                    <TotalPriceContainer>
                        <GrandTotalTerm>Grand Total</GrandTotalTerm>
                        <TotalPrice>£ {toCurrencyFormat(thisInvoice.total)}</TotalPrice>
                    </TotalPriceContainer>
                </InvoiceTotalContainer>
            </InvoiceViewContainer>
            <ViewInvoiceButtonCollection />
        </div>
    )
}

export default ViewInvoice;