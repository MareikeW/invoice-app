import React from "react";
import {ViewInvoiceCollectionContainer} from "./button-collection-styles";
import DiscardButton from "../buttons/DiscardButton";
import DraftButton from "../buttons/DraftButton";
import SaveSendButton from "../buttons/SaveSendButton";
function CreateInvoiceButtonCollection() {
    return (
        <ViewInvoiceCollectionContainer>
            <DiscardButton>Discard</DiscardButton>
            <DraftButton>Save as Draft</DraftButton>
            <SaveSendButton>Save & Send</SaveSendButton>
        </ViewInvoiceCollectionContainer>
    )
}

export default CreateInvoiceButtonCollection;