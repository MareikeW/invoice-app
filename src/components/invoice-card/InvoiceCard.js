import React from "react";
import { toReformattedDate, toCurrencyFormat } from "../../utils/utils.js";
import { Container, Id, Name, DateInfo, Sum, SumContainer, Status, StatusDot, LinkContainer } from "./invoiceCard-styles";
import { ReactComponent as Arrow } from "../../icons/icon-arrow-right.svg";
import {Link} from "react-router-dom";

    
const InvoiceCard = ({id, clientName, paymentDue, total, status}) => {

    return (
        /* Ein Linkcontainer, weil sonst der Link links und rechts über die InvoiceCard hinaus klickbar ist. */
        <LinkContainer>
            <Link to={`/view-invoice/${id}`}>
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
            </Link>
        </LinkContainer>
    )
}

export default InvoiceCard;