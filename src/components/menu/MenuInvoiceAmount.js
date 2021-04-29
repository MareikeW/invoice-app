import React from "react";

const MenuInvoiceAmount = ({amount}) => {
    return (
        <div>
            <h2>Invoices</h2>
            <p className="mobileVersion">{amount.length} invoices</p>
            <p className="tabletVersion">There are a total of {amount.length} invoices</p> 
        </div>
    )
}

export default MenuInvoiceAmount;