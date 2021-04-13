import React from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import ViewInvoiceButtonCollection from "../components/button-collections/ViewInvoiceButtonCollection";
import InvoiceFullView from "../components/invoice-full-view/InvoiceFullView";

function ViewInvoice() {
    return (
        <div>
            <GoBackButton />
            <div>Status <span>Pending</span></div>
            <InvoiceFullView />
            <ViewInvoiceButtonCollection />
        </div>
    )
}

export default ViewInvoice;