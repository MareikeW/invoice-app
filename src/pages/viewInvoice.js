import React from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import ViewInvoiceButtonCollection from "../components/button-collections/ViewInvoiceButtonCollection";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Context} from "../context";
import {IdNameAdressContainer, InvoiceViewContainer, InvoiceInformationContainer, InvoiceData,
    PaymentDue, BillTo, SentTo, InvoiceTotalContainer,
    TotalPrice, StatusContainer, StatusWord, StatusName, StatusDot, BillToAddress, TotalPriceContainer,
    GrandTotalTerm} from "../components/invoice-full-view/invoice-full-view-styles.js";
import { toReformattedDate, toCurrencyFormat } from "../utils/utils.js";

const ViewInvoice = () => {
    const {invoiceId} = useParams();
    const context = React.useContext(Context);
  
    // Sucht nach der Rechnung, die angezeigt werden soll
    const thisInvoice = context.invoices.find(invoice => invoice.id === invoiceId);

    // manchmal gibt es mehrere zu bezahlende Rechnungen
    // Pro Produkt wird ein neuer Produktcontainer angelegt
    function getItems() {
        for (let i = 0; i < thisInvoice.length; i++) {
            if(thisInvoice.id === invoiceId) {
                return (
                    <div>
                     {thisInvoice.items.map((item) =>
                            <div key={item.total}>
                                <h4>{item.name}</h4>
                                <p>{item.quantity} x £ {toCurrencyFormat(item.price)}</p>
                                <p>£ {toCurrencyFormat(item.total)}</p>
                            </div>
                        )
                    } 
                    </div>
                )
            } else {
                return null;
            }
        }
    }

    return (
        <div>
            <Link to="/"><GoBackButton /></Link>
            <StatusContainer><StatusWord>Status</StatusWord><StatusName status={thisInvoice.status}><StatusDot status={thisInvoice.status} />{thisInvoice.status}</StatusName></StatusContainer>
            <InvoiceViewContainer className="body2">
                <IdNameAdressContainer>
                    <h4>{thisInvoice.id}</h4>
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
                  {getItems()}

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