import React from "react";
import {ZeroInvoicesContainer} from "../menu/menu-styles";
import {ReactComponent as ZeroInvoicesImage} from "../../icons/illustration-empty.svg";

const ZeroInvoices = () => {
    return (
        <ZeroInvoicesContainer>
                <ZeroInvoicesImage />
                <h2>There is nothing here</h2>
                <p>Create an invoice by clicking the <strong>New</strong> button and get started</p>
        </ZeroInvoicesContainer>
    )
}

export default ZeroInvoices;