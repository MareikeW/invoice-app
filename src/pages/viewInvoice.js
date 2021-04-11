import React from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import ViewInvoiceButtonCollection from "../components/button-collections/ViewInvoiceButtonCollection";

function ViewInvoice() {
    return (
        <div>
            <GoBackButton />
            <div>Status <span>Pending</span></div>
            <div>
                <div># Id</div>
                <p>Project name</p>

                <p>Adress</p>

                <p>Invoice Date</p>
                <p>Date</p>

                <p>Payment Due</p>
                <p>Date</p>

                <p>Bill To</p>
                <p>Name</p>
                <p>Adress</p>

                <p>Sent to</p>
                <p>Email</p>

                <div>
                    <p>Project Type</p>
                    <p>Amount x Price</p>
                    <p>total</p>
                </div>

                <div>
                    <p>Grand Total</p>
                    <p>Total Price...</p>
                </div>
            </div>
            <ViewInvoiceButtonCollection />
        </div>
    )
}

export default ViewInvoice;