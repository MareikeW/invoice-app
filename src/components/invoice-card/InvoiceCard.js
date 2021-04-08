import React from "react";
import {Container, Id, Name, DateInfo, Sum, Status} from "./invoiceCard-styles";

function InvoiceCard() {
    return (
        <Container>
            <Id>#RT3080</Id>
            <Name>Jensen Huang</Name>
            <div>
                <DateInfo>Due 19 Aug 2021</DateInfo>
                <Sum>£ 1,800.90</Sum>
                <Status>Paid</Status>
            </div>
        </Container>
    )
}

export default InvoiceCard;