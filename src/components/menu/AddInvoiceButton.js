import React from "react";
import {StyledAddInvoiceButton, PlusSign } from "./menu-styles";
import {ReactComponent as Plus} from "../../icons/icon-plus.svg";

const AddInvoiceButton = () => {
    return (
        <div>
            <StyledAddInvoiceButton className="mobileVersion">
                <PlusSign>
                    <Plus style={{position: "absolute", top: "10px", left: "10px"}}/>
                </PlusSign>New
            </StyledAddInvoiceButton>
            <StyledAddInvoiceButton className="tabletVersion">
                <PlusSign>
                    <Plus style={{position: "absolute", top: "10px", left: "10px"}}/>
                </PlusSign>New Invoice
            </StyledAddInvoiceButton>
        </div>    
    )
}

export default AddInvoiceButton;