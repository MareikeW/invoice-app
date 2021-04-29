import React from "react";
import {InvoiceInformationContainer, InvoiceData, PaymentDue, BillTo, BillToAddress, SentTo} from "./invoice-full-view-styles";
import {toReformattedDate} from "../../utils/utils";

const InvoiceInformation = ({createdAt, paymentDue, clientName, street, city, postCode, country, clientEmail}) => {
    return (
        <InvoiceInformationContainer>
                    <p>Invoice Date</p>
                    <InvoiceData>{toReformattedDate(createdAt)}</InvoiceData>

                    <PaymentDue>
                        <p>Payment Due</p>
                        <InvoiceData>{toReformattedDate(paymentDue)}</InvoiceData>
                    </PaymentDue>

                    <BillTo>
                        <p>Bill To</p>
                        <InvoiceData>{clientName}</InvoiceData>
                        <BillToAddress>
                            <p>{street}</p>
                            <p>{city}</p>
                            <p>{postCode}</p>
                            <p>{country}</p>
                        </BillToAddress>
                    </BillTo>

                    <SentTo>
                        <p>Sent to</p>
                        <InvoiceData>{clientEmail}</InvoiceData>
                    </SentTo>
                </InvoiceInformationContainer>
    )
}

export default InvoiceInformation;