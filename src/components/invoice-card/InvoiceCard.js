import React from "react";
import { toReformattedDate, toCurrencyFormat } from "../../utils/utils.js";
import {Container, Id, Name, DateInfo, Sum, Status} from "./invoiceCard-styles";

function InvoiceCard(props) {
    


    /*function coloriseStatus(status) {
        switch (status) {
            case "draft": 
                return status.style.color = "#373B53";
            case "pending": 
                return status.style.color = "#FF8F00";
            case "paid":
                return status.style.color = "#33D69F";
            default:
                return status.style.color = "#fff";
        }
    }*/

    return (
        <Container>
            <Id>#{props.id}</Id>
            <Name>{props.clientName}</Name>
            <div>
                <DateInfo>Due {toReformattedDate(props.paymentDue)}</DateInfo>
                <Sum>£ {toCurrencyFormat(props.total)}</Sum>
                <Status>{props.status}</Status>
            </div>
        </Container>
    )
}

export default InvoiceCard;