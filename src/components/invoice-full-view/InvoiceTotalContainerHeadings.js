import React from "react";
import {StyledInvoiceTotalContainerHeadings, HeadingItemName, HeadingItemQuantity, HeadingItemPrice, HeadingItemTotal} from "./invoice-full-view-styles";

const InvoiceTotalContainerHeadings = () => {
    return (
        <StyledInvoiceTotalContainerHeadings>
            <HeadingItemName>Item Name</HeadingItemName>
            <HeadingItemQuantity>QTY.</HeadingItemQuantity>
            <HeadingItemPrice>Price</HeadingItemPrice>
            <HeadingItemTotal>Total</HeadingItemTotal>
        </StyledInvoiceTotalContainerHeadings>
    )
}

export default InvoiceTotalContainerHeadings;