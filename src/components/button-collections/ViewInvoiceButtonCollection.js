import React from "react";
import {ViewInvoiceCollectionContainer} from "./button-collection-styles";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import MarkAsPaidButton from "../buttons/MarkAsPaidButton";
function ViewInvoiceButtonCollection() {
    return (
        <ViewInvoiceCollectionContainer>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
            <MarkAsPaidButton>Mark as Paid</MarkAsPaidButton>
        </ViewInvoiceCollectionContainer>
    )
}

export default ViewInvoiceButtonCollection;