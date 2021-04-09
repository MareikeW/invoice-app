import React from "react";
import {Container, Id, Name, DateInfo, Sum, Status} from "./invoiceCard-styles";

function InvoiceCard(props) {
    return (
        <Container>
            <Id>{props.id}</Id>
            <Name>{props.clientName}</Name>
            <div>
                <DateInfo>Due {props.paymentDue}</DateInfo>
                <Sum>£ {props.total}</Sum>
                <Status>{props.status}</Status>
            </div>
        </Container>
    )
}

export default InvoiceCard;