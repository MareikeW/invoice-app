import React from "react";
import { toReformattedDate, toCurrencyFormat } from "../../utils/utils.js";
import { Container, Id, Name, DateInfo, Sum, SumContainer, Status, StatusDot } from "./invoiceCard-styles";
import { ReactComponent as Arrow } from "../../icons/icon-arrow-right.svg";

    
const InvoiceCard = ({id, clientName, paymentDue, total, status}) => {

    return (
        <Container>
            <Id>#{id}</Id>
            <Name>{clientName}</Name>
            <div>
                <DateInfo>Due {toReformattedDate(paymentDue)}</DateInfo>
                <SumContainer><Sum>£ {toCurrencyFormat(total)}</Sum></SumContainer>
                <Status status={status}><StatusDot status={status} />{status}</Status>
                <Arrow className="arrowRight"/>
            </div>
        </Container>
    )
}

export default InvoiceCard;