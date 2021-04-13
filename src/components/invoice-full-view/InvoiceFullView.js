import React from "react";
import {InvoiceViewContainer, IdNameAdressContainer, 
    InvoiceInformationContainer, InvoiceData,
    PaymentDue, BillTo, SentTo, InvoiceTotalContainer,
    TotalPrice} from "./invoice-full-view-styles";

function InvoiceFullView() {
    return (
        <InvoiceViewContainer>
            <IdNameAdressContainer>
                <h4># Id</h4>
                <p>Project name</p>
                <br />
                <br />
                <p>Street</p>
                <p>City</p>
                <p>Postcode</p>
                <p>Country</p>
            </IdNameAdressContainer>

            <InvoiceInformationContainer>
                <p>Invoice Date</p>
                <InvoiceData>Date</InvoiceData>

                <PaymentDue>
                    <p>Payment Due</p>
                    <InvoiceData>Date</InvoiceData>
                </PaymentDue>

                <BillTo>
                    <p>Bill To</p>
                    <InvoiceData>Name</InvoiceData>
                    <p>Street</p>
                    <p>City</p>
                    <p>Postcode</p>
                    <p>Country</p>
                </BillTo>

                <SentTo>
                    <p>Sent to</p>
                    <InvoiceData>Email</InvoiceData>
                </SentTo>
            </InvoiceInformationContainer>
            
            <InvoiceTotalContainer>
                <div>
                    <h4>Project Type</h4>
                    <p>Amount x Price</p>
                    <p>total</p>
                </div>

                <div>
                    <p>Grand Total</p>
                    <TotalPrice>Total Price...</TotalPrice>
                </div>
            </InvoiceTotalContainer>
        </InvoiceViewContainer>
    )
}

export default InvoiceFullView;