import React from "react";
import {TotalPriceContainer, GrandTotalTerm, StyledTotalPrice} from "./invoice-full-view-styles";
import { toCurrencyFormat } from "../../utils/utils.js";

const TotalPrice = ({total}) => {
    return (
        <TotalPriceContainer>
            <GrandTotalTerm className="mobileVersion">Grand Total</GrandTotalTerm>
            <GrandTotalTerm className="tabletVersion">Amount Due</GrandTotalTerm>
            <StyledTotalPrice>£ {toCurrencyFormat(total)}</StyledTotalPrice>
        </TotalPriceContainer>
    )
}

export default TotalPrice;