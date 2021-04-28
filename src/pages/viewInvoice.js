import React from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import ViewInvoiceButtonCollection from "../components/button-collections/ViewInvoiceButtonCollection";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Context} from "../context";
import Header from "../components/shared/Header";
import {InvoiceViewContainer, InvoiceUpperContainer, Description, SenderAddress, InvoiceInformationContainer, InvoiceData,
    PaymentDue, BillTo, SentTo, InvoiceTotalContainer, InvoiceTotalContainerHeadings, HeadingItemName, HeadingItemQuantity, HeadingItemPrice, HeadingItemTotal,
    TotalPrice, StatusContainer, StatusWord, StatusName, StatusDot, BillToAddress, TotalPriceContainer,
    GrandTotalTerm, StyledItem} from "../components/invoice-full-view/invoice-full-view-styles.js";
import { toReformattedDate, toCurrencyFormat } from "../utils/utils.js";

const ViewInvoice = () => {
    const {invoiceId} = useParams();
    const context = React.useContext(Context);

    // Sucht nach der Rechnung, die angezeigt werden soll
    const thisInvoice = context.invoices.find(invoice => invoice.id === invoiceId);

    return (
        <div>
            <Header />
            <Link to="/"><GoBackButton /></Link>
            <StatusContainer><StatusWord>Status</StatusWord><StatusName status={thisInvoice.status}><StatusDot status={thisInvoice.status} />{thisInvoice.status}</StatusName></StatusContainer>
            <InvoiceViewContainer className="body2">
            <InvoiceUpperContainer>
                <div>
                    <h4>#{thisInvoice.id}</h4>
                    <Description>{thisInvoice.description}</Description>
                    <br />
                    <SenderAddress>
                        <p>{thisInvoice.senderAddress.street}</p>
                        <p>{thisInvoice.senderAddress.city}</p>
                        <p>{thisInvoice.senderAddress.postCode}</p>
                        <p>{thisInvoice.senderAddress.country}</p> 
                    </SenderAddress> 
                </div>
            
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
                </InvoiceUpperContainer>
                <InvoiceTotalContainer>
                <InvoiceTotalContainerHeadings>
                    <HeadingItemName>Item Name</HeadingItemName>
                    <HeadingItemQuantity>QTY.</HeadingItemQuantity>
                    <HeadingItemPrice>Price</HeadingItemPrice>
                    <HeadingItemTotal>Total</HeadingItemTotal>
                </InvoiceTotalContainerHeadings>
                {/* Iteriert durch sämtliche Items, weil manchmal mehr als ein Item in der Liste steht */}
                {thisInvoice.items.map(item => (
                        <StyledItem key={item.total}>
                            <h4>{item.name}</h4>
                            <p>{item.quantity} x £ {toCurrencyFormat(item.price)}</p>
                            <p className="itemTotal">£ {toCurrencyFormat(item.total)}</p>
                        </StyledItem>
                ))}
                
                    <TotalPriceContainer>
                        <GrandTotalTerm className="mobileVersion">Grand Total</GrandTotalTerm>
                        <GrandTotalTerm className="tabletVersion">Amount Due</GrandTotalTerm>
                        <TotalPrice>£ {toCurrencyFormat(thisInvoice.total)}</TotalPrice>
                    </TotalPriceContainer>
                </InvoiceTotalContainer>
            </InvoiceViewContainer>
            <ViewInvoiceButtonCollection /> 
        </div>
    )
}

export default ViewInvoice;