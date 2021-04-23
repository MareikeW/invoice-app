import React from "react";
import { toReformattedDate, toCurrencyFormat } from "../../utils/utils.js";
import { Container, Id, Name, DateInfo, Sum, Status, StatusDot } from "./invoiceCard-styles";

    
const InvoiceCard = ({id, clientName, paymentDue, total, status}) => {

    return (
        <Container>
            <Id>#{id}</Id>
            <Name>{clientName}</Name>
            <div>
                <DateInfo>Due {toReformattedDate(paymentDue)}</DateInfo>
                <Sum>£ {toCurrencyFormat(total)}</Sum>
                <Status status={status}><StatusDot status={status} />{status}</Status>
            </div>
        </Container>
    )
}

export default InvoiceCard;